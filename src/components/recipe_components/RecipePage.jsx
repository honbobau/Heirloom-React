import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';
import Instructions from './Instructions.jsx';
import DescriptionTags from './DescriptionTags.jsx';
import LikeButton from './LikeButton.jsx';
import FavButton from './FavButton.jsx';
import FollowUser from './FollowUser.jsx';
import Return from '../utility_components/Return.jsx';
import Header from './Header.jsx';


const token = '?token=' + window.localStorage.token;

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id:              '',
      recipe:          [],
      ingredients:     [],
      instructions:    [],
      description:     '',
      photoURL:        '',
      userID:          '',
      recipeUsername:  '',
      ifFollowing: '',
      ifLiked: '',
      ifFav: ''

    }
  }

  componentDidMount() { this.fetchRecipeComponents() }

  render() {

    let follow;
    let like;
    let favourite;

    if (this.state.userID !== parseInt(window.localStorage.current_id)) {
      if (this.state.ifFollowing == 'false') {
        follow = <FollowUser followUser   ={this.followUser} />
      }
    }

    if (this.state.userID !== parseInt(window.localStorage.current_id)) {
      if (this.state.ifLiked == 'false') {
        like = <LikeButton likeRecipe   ={this.likeRecipe} />
      }
    }

    if (this.state.userID !== parseInt(window.localStorage.current_id)) {
      if (this.state.ifFav == 'false') {
        favourite = <FavButton  favRecipe    ={this.favRecipe} />
      }
    } 
    
    return(
      <div className='container'>
        <div className='columns recipe-page'>

          <div className='column is-3 recipe-content'>
            <Header renderNewPage={this.props.renderNewPage} />

            <div className='smaller-container'>
              <section className="recipe-display-photo">
                <img src={this.state.photoURL} />
              </section>

              <section className='recipe-nav-buttons'>
                <h4>Recipe by: {this.state.recipeUsername}</h4>
                { like }
                { favourite }
                { follow }
              </section>


              <section className="recipe-display-description">
                <DescriptionTags description={this.state.description} />
              </section>

              <section className="recipe-display-ingredients">
                <div>
                  <h5>Ingredients</h5>  
                </div>
                <Ingredients ingredients={this.state.ingredients} />
              </section>

              <section className="recipe-display-instructions">
                <h4>Instructions</h4>
                <Instructions instructions={this.state.instructions} />
              </section>

            </div>           
          </div>

        </div>
      </div>
    );
  }

  // fetches the recipe from the database
  fetchRecipeComponents = () => {
    let recipe_id = window.localStorage.recipe_id;

    fetch(`http://localhost:3000/recipes/${recipe_id}` + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
    .then((recipe) => recipe.json())
    .then((recipe) => this.setState({ recipe: recipe }))
    .then((recipe) => this.saveRecipeData()) 
    .then((recipe) => this.saveUserData())
    .catch(function(recipe){ console.log(recipe) })
    .then((follow) => this.checkFollow())
    .then((follow) => this.setState({ ifFollowing: follow }))
    .then((like) => this.checkLike())
    .then((like) => this.setState({ ifLiked: like }))
    .then((fav) => this.checkFav())
    .then((fav) => this.setState({ ifFav: fav }))
  }

  // fetches the user information associated with this recipe
  saveUserData = () => {
    let recipeUserID = this.state.userID

    fetch(`http://localhost:3000/user/${recipeUserID}` + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })  
    .then((recipeUser) => recipeUser.json())
    .then((recipeUser) => this.fetchRecipeUser(recipeUser))

  }

  // saves the recipe's user to state
  fetchRecipeUser = (recipeUser) => {
    this.setState({ recipeUsername: recipeUser.username })
  }

  // saves all data from the recipe to state
  saveRecipeData = () => {
    this.fetchRecipeIngredients()
    this.fetchRecipeInstructions()
    this.fetchRecipeDescription()
    this.fetchRecipePhoto()
    this.fetchRecipeID()
    this.fetchUserID()
  }

  fetchRecipeIngredients = () => {
    this.setState({ ingredients: this.state.recipe[0].recipe.ingredients })
  }

  fetchRecipeInstructions = () => {
    this.setState({ instructions: this.state.recipe[0].recipe.instructions })
  }

  fetchRecipeDescription = () => {
    this.setState({ description: this.state.recipe[0].recipe.description })
  }

  fetchRecipePhoto = () => {
    this.setState({ photoURL: this.state.recipe[0].photos[0].filepath })
  }

  fetchRecipeID = () => {
    this.setState({ id: this.state.recipe[0].recipe.id })
  } 

  fetchUserID = () => {
    this.setState({ userID: this.state.recipe[0].recipe.user_id })
  }  

  // attaches the current user id to this recipe id in likes
  likeRecipe = () => {
    const { userID, id } = this.state;

    fetch(`http://localhost:3000/user/${userID}/recipe/${id}/likes${token}`, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
  }

  // attaches the current user id to this recipe id in favourites
  favRecipe = () => {
    const {userID, id} = this.state;

    fetch(`http://localhost:3000/user/${userID}/recipe/${id}/favourites${token}`, {
      method:  'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
  }

  // current user follows the user of the recipe being shown
  followUser = () => {
    let current_user = window.localStorage.current_id;
    let userID       = this.state.userID;

    fetch(`http://localhost:3000/user/${current_user}/followUser/${userID}/follows${token}`, {
      method:  'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
  }

  checkLike = () => {
      let current_user = window.localStorage.current_id;
      let userID       = this.state.userID

      fetch(`http://localhost:3000/user/${current_user}/recipe/${userID}/likes${token}`, {
        method: 'GET',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json'
        }
      })
    }

  checkFollow = () => {
    let current_user = window.localStorage.current_id;
    let userID       = this.state.userID

    fetch(`http://localhost:3000/user/${current_user}/follows/${userID}/follows${token}`, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  checkFav = () => {
    let current_user = window.localStorage.current_id;
    let userID       = this.state.userID

    fetch(`http://localhost:3000/user/${current_user}/recipe/${userID}/favourites${token}`, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
};

export default RecipePage;