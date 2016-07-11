import React from 'react';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import RenderUserFeed from '../utility_components/RenderUserFeed.jsx';
import RenderUserProfile from '../utility_components/RenderUserProfile.jsx';

class GlobalFeedHeader extends React.Component {
  
    render() {
      return(
        <div className="container">
          <div className="row">

            <section className="col s3">
              Global Feed
              {/* stats */}
            </section>

            <section className="col s6">
              {/* RenderUserFeed */}
              {/* RenderSearchRecipes */}
              {/* RenderAddRecipe e */}
            </section>

          </div>
        </div>

      );
    }
}

export default GlobalFeedHeader;
