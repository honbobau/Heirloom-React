import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landing_page_components/LandingPage.jsx';
import SignupPage from './components/signup_components/SignupPage.jsx';
import UserFeedPage from './components/user_feed_components/UserFeedPage.jsx';
import GlobalFeedPage from './components/global_feed_components/GlobalFeedPage.jsx';

ReactDOM.render(<SignupPage />, document.getElementById('app'));