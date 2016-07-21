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
let classNames = require('classnames');

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
      isLiked:         '',
      isFav:           ''
    };
  }

  componentDidMount() {
    this.fetchRecipeComponents();
  }

  render() {

    return(
      <div className='container'>
        <div className='columns recipe-page'>

          <div className='column is-3 recipe-content'>
            {/* header */}
            <Header renderNewPage={this.props.renderNewPage} />

            {/* photo */}
            <div className='recipe-display'>
              <div className="recipe-display-photo">
                <img src={this.state.photoURL} />
              </div>

              <div className='recipe-display-icons'>
                <LikeButton likeRecipe={this.likeRecipe} />
                <FavButton  favRecipe={this.favRecipe} />
                <FollowUser followUser={this.followUser} />
              </div>
            </div>

              <section className='recipe-nav-buttons'>
                <h4>Recipe by: {this.state.recipeUsername}</h4>
              </section>

              {/* description */}
              <section className="recipe-display-description">
                <DescriptionTags description={this.state.description} />
              </section>

               <hr/>

              {/* ingredients */}
              <section className="recipe-display-ingredients">
                <Ingredients ingredients={this.state.ingredients} />
              </section>

               <hr/>

              {/* instructions */}
              <section className="recipe-display-instructions">
                <Instructions instructions={this.state.instructions} />
              </section>

          </div>

        </div>
      </div>
    );
  }

  // fetches the recipe from the database
  fetchRecipeComponents = () => {
    let recipe_id = window.localStorage.recipe_id;
    let token = '?token=' + window.localStorage.token;

    fetch(`https://heirloom-api.herokuapp.com/recipes/${recipe_id}` + token, {
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
    .catch(function(recipe) {
      console.log(recipe);
    });
  }

  // fetches the user information associated with this recipe
  saveUserData = () => {
    let recipeUserID = this.state.userID;
    let token = '?token=' + window.localStorage.token;

    fetch(`https://heirloom-api.herokuapp.com/user/${recipeUserID}` + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((recipeUser) => recipeUser.json())
    .then((recipeUser) => this.fetchRecipeUser(recipeUser));
  }

  // saves the recipe's user to state
  fetchRecipeUser = (recipeUser) => {
    this.setState({ recipeUsername: recipeUser.username });
  }

  // saves all data from the recipe to state
  saveRecipeData = () => {
    this.fetchRecipeIngredients();
    this.fetchRecipeInstructions();
    this.fetchRecipeDescription();
    this.fetchRecipePhoto();
    this.fetchRecipeID();
    this.fetchUserID();
  }

  fetchRecipeIngredients = () => {
    this.setState({ ingredients: this.state.recipe[0].recipe.ingredients });
  }

  fetchRecipeInstructions = () => {
    this.setState({ instructions: this.state.recipe[0].recipe.instructions });
  }

  fetchRecipeDescription = () => {
    this.setState({ description: this.state.recipe[0].recipe.description });
  }

  fetchRecipePhoto = () => {
    this.setState({ photoURL: this.state.recipe[0].photos[0].filepath });
  }

  fetchRecipeID = () => {
    this.setState({ id: this.state.recipe[0].recipe.id });
  }

  fetchUserID = () => {
    this.setState({ userID: this.state.recipe[0].recipe.user_id });
  }

  // attaches the current user id to this recipe id in likes
  likeRecipe = (callback) => {
    const current_id = window.localStorage.current_id;
    const { id } = this.state;
    let token = '?token=' + window.localStorage.token;

    fetch(`https://heirloom-api.herokuapp.com/user/${current_id}/recipe/${id}/likes${token}`, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    });

    callback;
  }

  // attaches the current user id to this recipe id in favourites
  favRecipe = (callback) => {
    let token = '?token=' + window.localStorage.token;
    const current_id = window.localStorage.current_id;
    const { id } = this.state;

    fetch(`https://heirloom-api.herokuapp.com/user/${current_id}/recipe/${id}/favourites${token}`, {
      method:  'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    });

    callback;
  }

  // current user follows the user of the recipe being shown
  followUser = (callback) => {
    let token = '?token=' + window.localStorage.token;
    let current_user = window.localStorage.current_id;
    let userID       = this.state.userID;

    fetch(`https://heirloom-api.herokuapp.com/user/${current_user}/followUser/${userID}/follows${token}`, {
      method:  'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    });

    callback;
  }

  // checks if the current user has already like the current recipe
  checkLiked = () => {
    let token       = '?token=' + window.localStorage.token;
    let currentUser = window.localStorage.current_id;
    let recipeID    = this.state.id;

    fetch(`https://heirloom-api.herokuapp.com/user/${currentUser}/recipe/${recipeID}/likes${token}`, {
      method:  'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((result) => console.log(result))
    .catch((result) => console.log(result));
  }

};

export default RecipePage;
