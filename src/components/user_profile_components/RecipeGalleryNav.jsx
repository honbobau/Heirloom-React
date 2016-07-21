import React from 'react';

class RecipeGalleryNav extends React.Component {

  render() {
    let recipeDisplay = this.props.recipeDisplay;
    let toggleGallery = this.props.toggleGallery;

    let isActiveUser = recipeDisplay === 'user' ? 'fa fa-user active-nav floating' : 'fa fa-user inactive-nav';
    let isActiveFav = recipeDisplay === 'fav' ? 'fa fa-heart active-nav floating' : 'fa fa-heart inactive-nav';

    let isActiveUserBox = recipeDisplay === 'user' ? 'profile-gallery-nav-btn active-box' : 'profile-gallery-nav-btn inactive-box';
    let isActiveFavBox = recipeDisplay === 'fav' ? 'profile-gallery-nav-btn active-box' : 'profile-gallery-nav-btn inactive-box';

    return(
      <div className='profile-gallery-nav'>
        <div className={isActiveUserBox}>
          <span className='icon is-medium'>
            <i className={isActiveUser} onClick={ () => toggleGallery('user') }></i>
          </span>
        </div>

        <div className={isActiveFavBox}>
          <span className='icon is-medium'>
            <i className={isActiveFav} onClick={ () => toggleGallery('fav') }></i>
          </span>
        </div>
      </div>
    );
  }
}

export default RecipeGalleryNav;
