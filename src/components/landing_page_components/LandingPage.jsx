import React from 'react';
import LoginForm from './LoginForm.jsx'
import SignupButton from './SignupButton.jsx'

class LandingPage extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;

    return (
      <section className="landing-page">
        <div className="container">
          <div className="columns">

            <div className="column is-6 is-offset-1 landing-page-filler">
                <img src="src/images/heirloom_logo.jpg" />
              
            </div>

            <div className="column is-3 landing-page-login">
              <div className="login-form"> 
                <LoginForm />
              </div>

              <div className="signup-button">
                <SignupButton renderNewPage={renderNewPage} />
              </div>
            </div>
            
          </div>
        </div>
      </section>

    );
  }
}

export default LandingPage;
