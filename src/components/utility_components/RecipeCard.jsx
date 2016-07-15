import React from 'react';
import RecipePage from '../recipe_components/RecipePage.jsx';

class RecipeCard extends React.Component {

  render() {
    const recipe = this.props.recipe;
    const instructions = recipe[0].recipe.instructions;
    const ingredients = recipe[0].recipe.ingredients;
    const description = recipe[0].recipe.description;
    const imageURL = recipe[0].photos[0].filepath;

    console.log(recipe);

    return( 
      <div> 
        <img src={imageURL} />
        <p>{description}</p>
      </div>
    )
  }
}

export default RecipeCard;
