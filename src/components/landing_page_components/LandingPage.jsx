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

              <div className='landing-page-forms'>
                <section className="login-form"> 
                  <LoginForm renderNewPage={renderNewPage} />
                </section>

                <hr />

                <section className="signup-button">
                  <div className='smaller-container'>
                    <p>Tired of looking through shit sites for shit recipes? Join the Heirloom family.</p>
                    <SignupButton renderNewPage={renderNewPage} />
                  </div>
                </section>
              </div>
            </div>
            
          </div>
        </div>
    );
  }
}

export default LandingPage;
