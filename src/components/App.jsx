import React from 'react';
import LandingPage from './landing_page_components/LandingPage.jsx';
import SignupPage from './signup_components/SignupPage.jsx';
import ProfilePage from './user_profile_components/ProfilePage.jsx';
import RecipeNewEditPage from './recipe_new_edit_components/RecipeNewEditPage.jsx';
import RecipePage from './recipe_components/RecipePage.jsx';
import UserFeedPage from './user_feed_components/UserFeedPage.jsx';
import GlobalFeedPage from './global_feed_components/GlobalFeedPage.jsx';

const routes = {
  LandingPage,
  SignupPage,
  ProfilePage,
  RecipeNewEditPage,
  RecipePage,
  UserFeedPage,
  GlobalFeedPage,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'RecipePage'
    }
  };

  render() {
    const View = routes[this.state.page];
    return <View renderNewPage={this.renderNewPage} />;
  }

  renderNewPage = page => this.setState({ page });
  
}

export default App;