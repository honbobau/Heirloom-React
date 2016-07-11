import React from 'react';
import UserFeedHeader from './UserFeedHeader.jsx'
import RecipesContainer from '../utility_components/RecipesContainer.jsx'

class UserFeedPage extends React.Component {

  render() {
    return(
      
      <div>
        <header className="user-feed-header">
          <UserFeedHeader />
        </header>

        <section className="recipes-container">
          <div className="container">
            <div className="row">
              <RecipesContainer />
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default UserFeedPage;