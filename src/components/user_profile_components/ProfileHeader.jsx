import React from 'react';
import RenderGlobalFeed from '../utility_components/RenderGlobalFeed.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import SearchRecipes from '../utility_components/SearchRecipes.jsx'

class ProfileHeader extends React.Component {

  render() {
    let username      = this.props.userInfo.username;
    let photoURL      = this.props.userInfo.user_photo;
    let blurb         = this.props.userInfo.blurb;
    let renderNewPage = this.props.renderNewPage

    return(
      <header className='columns'>
        <div className='column is-3 is-offset-2'>
          <img src={photoURL} className='user-photo'/>
          <p>{username}</p>
          <p>{blurb}</p>
        </div>

        <div className='column is-6'>
          <RenderUserFeed renderNewPage={renderNewPage} />
          <RenderGlobalFeed renderNewPage={renderNewPage} />
          <SearchRecipes displayRecipeSearch={this.displayRecipeSearch}/>
        </div>
      </header>
    );
  }

  displayRecipeSearch = () => {

  }

}

export default ProfileHeader;