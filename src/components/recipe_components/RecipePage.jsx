import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';
import Instructions from './Instructions.jsx';
import DescriptionTags from './DescriptionTags.jsx';
import Image from './Image.jsx';
import LikeButton from './LikeButton.jsx';
import FavButton from './FavButton.jsx';

const token = '?token=' + window.localStorage.token;

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id:           '',
      recipe:       [],
      ingredients:  [],
      instructions: [],
      description:  '',
      tags:         '',
      photoURL:     '',
      user_id:      ''
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
            <header>
              {/* header content */}
            </header>

            <section className="recipe-display-photo">
              <Image imageURL={this.state.photoURL} />
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
              <h5>Instructions</h5>
              <Instructions instructions={this.state.instructions} />
            </section>

            <section className='recipe-nav-buttons'>
              <LikeButton 
                likeRecipe={this.likeRecipe}
              />
              <FavButton
                  favRecipe={this.favRecipe}
                  />
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
    .then((recipe) => this.setState({ recipe: recipe }) )
    .then(this.fetchRecipeIngredients)
    .then(this.fetchRecipeInstructions)
    .then(this.fetchRecipeDescription)
    .then(this.fetchRecipePhoto)
    .then(this.fetchRecipeID)
    .then(this.fetchUserID)
    .catch(function(recipe){ console.log(recipe) })
  }

  // fetches the user information associated with this recipe


  // fetches the ingredients from the recipe
  fetchRecipeIngredients = () => {
    this.setState({
      ingredients: this.state.recipe[0].recipe.ingredients
    })
  }

  // fetches the instructions from the recipe
  fetchRecipeInstructions = () => {
    this.setState({
      instructions: this.state.recipe[0].recipe.instructions
    })
  }

  // fetches the description attached to the recipe
  fetchRecipeDescription = () => {
    this.setState({
      description: this.state.recipe[0].recipe.description
    })
  }

  // fetches the photo attached to the recipe from the database
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
    user_id: this.state.recipe[0].recipe.user_id
  })
  console.log(this.state.user_id) 
  }  

  likeRecipe = () => {
    const { user_id, id } = this.state;
    fetch(`http://localhost:3000/user/${user_id}/recipe/${id}/likes${token}`, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
  }

  favRecipe = () => {
    const {user_id, id} = this.state;
    fetch(`http://localhost:3000/user/${user_id}/recipe/${id}/favourites${token}`, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
  }
};

export default RecipePage;