import React from 'react';
import LoginForm from './LoginForm.jsx'
import SignupButton from './SignupButton.jsx'

class LandingPage extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;

    return (
        <div className="container">
          <div className="landing-page columns">

            <div className="column is-3 landing-page-content">
              <img src="src/images/heirloom_logo.jpg" />

              <div className="login-form"> 
                <LoginForm renderNewPage={renderNewPage} />
              </div>

              <div className="signup-button">
                <SignupButton renderNewPage={renderNewPage} />
              </div>
            </div>
            
          </div>
        </div>
    );
  }
}

export default LandingPage;
