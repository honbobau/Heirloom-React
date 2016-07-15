import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landing_page_components/LandingPage.jsx';
import SignupPage from './components/signup_components/SignupPage.jsx';
import UserFeedPage from './components/user_feed_components/UserFeedPage.jsx';
import GlobalFeedPage from './components/global_feed_components/GlobalFeedPage.jsx';
import RecipeNewEditPage from './components/recipe_new_edit_components/RecipeNewEditPage.jsx';
import RecipePage from './components/recipe_components/RecipePage.jsx';

ReactDOM.render(<GlobalFeedPage />, document.getElementById('app'));