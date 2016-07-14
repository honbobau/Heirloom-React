import React from 'react';
import RecipePage from '../recipe_components/RecipePage.jsx';

class RecipeCard extends React.Component {

  render() {
    const recipe = this.props.recipe;
    const instructions = recipe.instructions;
    const ingredients = recipe.ingredients;
    const description = recipe.description;

    console.log(recipe);

    return( 
      <div> 
        {instructions}
      </div>
    )
  }
}

export default RecipeCard;
