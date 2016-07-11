import React from 'react';
import LoginForm from './LoginForm.jsx'
import SignupButton from './SignupButton.jsx'

class LandingPage extends React.Component {

  render() {
    return (
      <section className="landing-page">
        <div className="container">
          <div className="row">

            <div className="col-sm-6 col-sm-offset-1 landing-page-filler">
                <img src="http://thumb7.shutterstock.com/display_pic_with_logo/3048662/394253539/stock-vector-red-tomato-vegetable-logo-icon-in-flat-style-with-funny-text-red-tomato-icon-logo-fresh-394253539.jpg" />
              
            </div>

            <div className="col-sm-3 landing-page-login">
              <div className="login-form"> 
                <LoginForm />
              </div>

              <div className="signup-button">
                <SignupButton />
              </div>
            </div>
            
          </div>
        </div>
      </section>

    );
  }
}

export default LandingPage;
