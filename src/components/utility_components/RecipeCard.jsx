import React from 'react';
import RecipePage from '../recipe_components/RecipePage.jsx';

class RecipeCard extends React.Component {

  render() {
    const recipe = this.props.recipe;
    const recipeID = recipe[0].recipe.id;
    const instructions = recipe[0].recipe.instructions;
    const ingredients = recipe[0].recipe.ingredients;
    const description = recipe[0].recipe.description;
    const imageURL = recipe[0].photos[0].filepath;

    console.log(this.props);

    return( 
        <section className='box recipe-card'> 
          <img 
            src={imageURL} 
            onClick={ () => this.props.renderNewPage('RecipePage') }
            className='recipe-card-image'/>
          <p>{description}</p>
        </section>
    )
  }
}

export default RecipeCard;
