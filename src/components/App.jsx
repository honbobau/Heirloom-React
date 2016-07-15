import React from 'react';
import LandingPage from './landing_page_components/LandingPage.jsx';
import SignupPage from './signup_components/SignupPage.jsx';
import ProfilePage from './user_profile_components/ProfilePage.jsx';
import RecipeNewEditPage from './recipe_new_edit_components/RecipeNewEditPage.jsx';
import RecipePage from './recipe_components/RecipePage.jsx';
import UserFeedPage from './user_feed_components/UserFeedPage.jsx';
import GlobalFeedPage from './global_feed_components/GlobalFeedPage.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      state: 'LandingPage'
    }
  };

  render() { 

    switch(this.state.state) {
      case 'LandingPage':
        return(
          <LandingPage />
        );

      case 'SignupPage':
        return(
          <SignupPage />
        );

      case 'ProfilePage':
        return(
          <ProfilePage />
        );

      case 'RecipeNewEditPage':
        return(
          <RecipeNewEditPage />
        );

      case 'RecipePage':
        return(
          <RecipePage />
        );

      case 'UserFeedPage':
        return(
          <UserFeedPage />
        );

      case 'GlobalFeedPage':
        return(
          <GlobalFeedPage />
        );
    }
  }
}

export default App;