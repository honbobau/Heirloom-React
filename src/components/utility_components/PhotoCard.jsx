import React from 'react';

class PhotoCard extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;
    const recipe        = this.props.recipe
    const recipeID      = recipe[0].recipe.id;
    const imageURL      = recipe[0].photos[0].filepath;
    
    return( 
      <div className='profile-recipe-card'> 
        <img 
          src={imageURL} 
          onClick={ () => this.renderRecipePage(recipeID, renderNewPage('RecipePage')) }
          className='profile-recipe-image'/>
      </div>
    )
  }

  renderRecipePage = (recipe_id, callback) => {
    window.localStorage.setItem('recipe_id', recipe_id) 
    callback
  }
}

export default PhotoCard;