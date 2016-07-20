import React from 'react';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import RenderGlobalFeed from '../utility_components/RenderGlobalFeed.jsx';
import RenderUserProfile from '../utility_components/RenderUserProfile.jsx';
import SearchRecipes from '../utility_components/SearchRecipes.jsx';

class UserFeedHeader extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;

    return(
        <header className='user-feed-header container'>
          <img src='src/images/heirloom_logo_white.png' className='heirloom-logo' />

          <div className='user-feed-header-nav'>
            <RenderGlobalFeed renderNewPage={renderNewPage} />
            <RenderAddRecipe renderNewPage={renderNewPage} />
            <RenderUserProfile renderNewPage={renderNewPage} />
          </div>
        </header>
    );
  }

}

export default UserFeedHeader;
