import React from 'react';
import RenderAddRecipe from '../utility_components/RenderAddRecipe.jsx';
import RenderGlobalFeed from '../utility_components/RenderGlobalFeed.jsx';
import RenderUserProfile from '../utility_components/RenderUserProfile.jsx';

class UserFeedHeader extends React.Component {

  render() {
    return(
        <div className="container">
          <div className="row">

            <section className="col s3">
              User Feed
              <RenderAddRecipe />
            </section>

            <section className="col s6">
              {/* render: global feed */}
              {/* render: user profile page */}
              {/* render: add new recipe */}
            </section>

          </div>
        </div>
    );
  }

}

export default UserFeedHeader;