import React from 'react';
import PhotoCard from '../utility_components/PhotoCard.jsx';

class RecipeGallery extends React.Component {

  render() {
    let recipes       = this.props.recipes;
    let renderNewPage = this.props.renderNewPage;
    let recipeDisplay = this.props.recipeDisplay;
    let className     = this.props.className + ' profile-photo-container';

    let classNameDisplay = recipeDisplay === this.props.className ? className + ' active-gallery' : className + ' hidden-gallery' ;

    console.log(classNameDisplay, recipeDisplay);

    return(
      <div className={classNameDisplay}>
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
