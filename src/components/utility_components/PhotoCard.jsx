import React from 'react';
import ProfilePage from '../user_profile_componenets/ProfilePage.jsx';

class RecipeCard extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;
    const recipeID      = recipe[0].recipe.id;
    const imageURL      = recipe[0].photos[0].filepath;
    
    return( 
        <section className='box photo-card'> 
          <img 
            src={imageURL} 
            onClick={ () => this.renderRecipePage(recipeID, renderNewPage('RecipePage')) }
            className='photo-card-image'/>
        </section>
    )
  }

  renderRecipePage = (recipe_id, callback) => {
    window.localStorage.setItem('recipe_id', recipe_id) 
    callback
  }
}

export default PhotoCard;
