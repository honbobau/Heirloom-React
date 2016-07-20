import React from 'react';
import PhotoCard from '../utility_components/PhotoCard.jsx';

class RecipeGallery extends React.Component {

  render() {
    let recipes = this.props.recipes;
    let renderNewPage = this.props.renderNewPage;

    return(
      <div className='profile-photo-container'>
        {recipes.map(recipe => <PhotoCard
                                recipe={recipe}
                                renderNewPage={renderNewPage}
                               />
        )}
      </div>
    );
  }

}

export default RecipeGallery;
