import React from 'react';
import RecipePage from '../recipe_components/RecipePage.jsx';
import RecipeCardStats from '../global_feed_components/RecipeCardStats.jsx';

class UserFeedRecipeCard extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;
    const recipe        = this.props.recipe;
    const recipeID      = recipe.id;
    const instructions  = recipe.instructions;
    const ingredients   = recipe.ingredients;
    const description   = recipe.description;
    const imageURL      = recipe.photos[0].filepath;

    return(
        <section className='box recipe-card'>
          <img
            src={imageURL}
            onClick={ () => this.renderRecipePage(recipeID, renderNewPage('RecipePage')) }
            className='recipe-card-image'
          />
          <RecipeCardStats
            ingredientsQty  = {ingredients.length}
            instructionsQty = {instructions.length}
            description     = {description}
          />
        </section>
    );
  }

  renderRecipePage = (recipe_id, callback) => {
    window.localStorage.setItem('recipe_id', recipe_id);
    callback;
  }
}

export default UserFeedRecipeCard;
