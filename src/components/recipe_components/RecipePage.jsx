import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';
import Instructions from './Instructions.jsx';
import DescriptionTags from './DescriptionTags.jsx';
import Image from './Image.jsx';
import LikeButton from './LikeButton.jsx';
import FavButton from './FavButton.jsx';
import FollowUser from './FollowUser.jsx';
import Return from '../utility_components/Return.jsx';

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
      recipeUsername:  ''
    }
  }

  componentDidMount() {
    this.fetchRecipeComponents()
  }

  render() {

    return(
      <div className='recipe-page container'>
        <div className='columns'>

          <div className='column is-3 is-offset-4 recipe-page-content'>

            <section className="recipe-display-photo">
              <Image imageURL={this.state.photoURL} />
            </section>

            <section className="recipe-display-description">
              <h6>Recipe by: {this.state.recipeUsername}</h6>
              <DescriptionTags description={this.state.description} />
            </section>

            <section className="recipe-display-ingredients">
              <div>
                <h5>Ingredients</h5>  
              </div>
              <Ingredients ingredients={this.state.ingredients} />
            </section>

            <section className="recipe-display-instructions">
              <h5>Instructions</h5>
              <Instructions instructions={this.state.instructions} />
            </section>

            <section className='recipe-nav-buttons'>
              <LikeButton likeRecipe={this.likeRecipe} />
              <FavButton favRecipe={this.favRecipe} />
              <Return renderNewPage={this.props.renderNewPage}/>
              <FollowUser followUser={this.followUser}/>
            </section>
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
    .then((recipe) => { console.log(recipe); return recipe; })
    .then((recipe) => this.setState({ recipe: recipe }))
    .then((recipe) => this.saveRecipeData()) 
    .then((recipe) => this.saveUserData())
    .catch(function(recipe){ console.log(recipe) })
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
    .then((recipeUser) => { console.log(recipeUser); return recipeUser; })
    .then((recipeUser) => this.fetchRecipeUser(recipeUser))

  }

  // saves the recipe's user to state
  fetchRecipeUser = (recipeUser) => {
    this.setState({
      recipeUsername: recipeUser.username
    })
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
    this.setState({
      ingredients: this.state.recipe[0].recipe.ingredients
    })
  }

  fetchRecipeInstructions = () => {
    this.setState({
      instructions: this.state.recipe[0].recipe.instructions
    })
  }

  fetchRecipeDescription = () => {
    this.setState({
      description: this.state.recipe[0].recipe.description
    })
  }

  fetchRecipePhoto = () => {
    this.setState({
      photoURL: this.state.recipe[0].photos[0].filepath
    })
  }

  fetchRecipeID = () => {
    this.setState({
      id: this.state.recipe[0].recipe.id
    })
  } 

  fetchUserID = () => {
    this.setState({
      userID: this.state.recipe[0].recipe.user_id
    })
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


};

export default RecipePage;