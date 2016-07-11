import React from 'react';
import GlobalFeedHeader from './GlobalFeedHeader.jsx';
import RecipesContainer from '../utility_components/RecipesContainer.jsx'

class GlobalFeedPage extends React.Component {

  render() {
    return(
      <div>
        <div>
          {/* header */}
        </div>

        <div>
          <RecipesContainer />
        </div>
      </div>
    );
  }
}

export default GlobalFeedPage;