import React from 'react';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import RenderUserProfile from '../utility_components/RenderUserProfile.jsx';

class GlobalFeedHeader extends React.Component {
  
    render() {
      return(
        <header className='global-feed-header container'>
          <img src='src/images/heirloom_logo.jpg' className='heirloom-logo' />
          {/* render: search bar */}
          {/* render: profile page */}
          {/* render:  */}
          <div className='global-feed-header-nav'>
            <RenderUserFeed renderNewPage={this.props.renderNewPage}/>
          </div>
        </header>
      );
    }
}

export default GlobalFeedHeader;
