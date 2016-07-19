import React from 'react';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import RenderUserProfile from '../utility_components/RenderUserProfile.jsx';
import SearchRecipes from '../utility_components/SearchRecipes.jsx';

class GlobalFeedHeader extends React.Component {
  
    render() {
      const renderNewPage = this.props.renderNewPage;
      const returnPage = 'GlobalFeedPage';

      return(
        <header className='global-feed-header container'>
          <img src='src/images/heirloom_logo_white.png' className='heirloom-logo' />
          
          <div className='global-feed-header-nav'>
            <SearchRecipes setRecipesInState={this.props.setRecipesInState}/>
            <RenderUserFeed renderNewPage={renderNewPage} />
            <RenderAddRecipe renderNewPage={renderNewPage} />
            <RenderUserProfile renderNewPage={renderNewPage} />
          </div>
        </header>
      );
    }
}

export default GlobalFeedHeader;
