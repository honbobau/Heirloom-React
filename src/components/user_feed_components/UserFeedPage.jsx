import React from 'react';
import UserFeedHeader from './UserFeedHeader.jsx'
import UserFeedRecipes from './UserFeedRecipes.jsx'

class UserFeedPage extends React.Component {

  render() {
    return(
      
      <div>
        <header className="user-feed-header">
          <UserFeedHeader />
        </header>

        <section className="user-feed-recipes">
          <div className="container">
            <div className="row">
              <UserFeedRecipes />
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default UserFeedPage;