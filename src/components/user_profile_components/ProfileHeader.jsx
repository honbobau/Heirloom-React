import React from 'react';
import RenderGlobalFeed from '../utility_components/RenderGlobalFeed.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import SearchRecipes from '../utility_components/SearchRecipes.jsx';
import Return from '../utility_components/Return.jsx';
// import SearchRecipesForm from './SearchRecipesForm.jsx';
import FollowButton from './FollowButton.jsx';
import Logout from './Logout.jsx';


// import SearchRecipes from '../utility_components/SearchRecipes.jsx';
// import SearchRecipesForm from './SearchRecipesForm.jsx';


class ProfileHeader extends React.Component {

  render() {
    let id            = this.props.userInfo.id
    let renderNewPage = this.props.renderNewPage;
    let followUser;
    let addRecipe;

    if (id !== parseInt(window.localStorage.current_id)) {
      followUser = ( <FollowButton followUser={ this.followUser } /> )
    } else {
      addRecipe = ( <RenderAddRecipe renderNewPage={renderNewPage} /> )
    }


    return( 
      <header className='profile-header'>
        <img src='src/images/heirloom_logo_white.png' className='heirloom-logo'/>
        <div className='profile-header-icons'>
          { followUser }
          { addRecipe }
          <Return renderNewPage={renderNewPage} />
          <Logout renderNewPage={renderNewPage} />
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