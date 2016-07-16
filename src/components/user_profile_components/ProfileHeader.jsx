import React from 'react';
import RenderGlobalFeed from '../utility_components/RenderGlobalFeed.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import SearchRecipes from '../utility_components/SearchRecipes.jsx';
// import SearchRecipesForm from './SearchRecipesForm.jsx';
import FollowButton from './FollowButton.jsx';


// import SearchRecipes from '../utility_components/SearchRecipes.jsx';
// import SearchRecipesForm from './SearchRecipesForm.jsx';


class ProfileHeader extends React.Component {

  render() {
    let id            = this.props.userInfo.id
    let username      = this.props.userInfo.username;
    let photoURL      = this.props.userInfo.user_photo;
    let blurb         = this.props.userInfo.blurb;
    let renderNewPage = this.props.renderNewPage;
    let followUser;
    let addRecipe;

    if (id !== parseInt(window.localStorage.current_id)) {
      followUser = (
        <FollowButton followUser={ this.followUser } />
      )
    } else {
      addRecipe = (
        <RenderAddRecipe renderNewPage={renderNewPage} />
      )
    }


    return( 
      <header className='columns'>
        <div className='column is-3 is-offset-2'>
          <img src={photoURL} className='user-photo'/>
          <p>{username}</p>
          <p>{blurb}</p>
        </div>

        <div className='column is-6'>
          { followUser }
          { addRecipe }
          <RenderUserFeed renderNewPage={renderNewPage} />
          <RenderGlobalFeed renderNewPage={renderNewPage} />
          {/* <SearchRecipes displayRecipeSearch={this.displayRecipeSearch}/> */}
        </div>
      </header>
    );
  }

  displayRecipeSearch = () => {

  }

  followUser = () => {
    // const {id: window.localStorage.current_id, following_id: id} = this.state
    const current_id = window.localStorage.current_id
    const following_id = this.props.userInfo.id
    const token = window.localStorage.token
    fetch(`http://localhost:3000/user/${current_id}/followUser/${following_id}/follows?token=${token}`, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
};

export default ProfileHeader;