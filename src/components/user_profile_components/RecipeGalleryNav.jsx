import React from 'react';

class RecipeGalleryNav extends React.Component {

  render() {
    let toggleGallery = this.props.toggleGallery;

    return(
      <div className='profile-gallery-nav'>
        <div className='profile-gallery-nav-btn'>
          <span className='icon is-medium'>
            <i className='fa fa-user' onClick={ () => toggleGallery('user') }></i>
          </span>
        </div>

        <div className='profile-gallery-nav-btn'>
          <span className='icon is-medium'>
            <i className='fa fa-heart' onClick={ () => toggleGallery('fav') }></i>
          </span>
        </div>
      </div>
    );
  }
}

export default RecipeGalleryNav;
