import React from 'react';
import LoginForm from './LoginForm.jsx'
import SignupButton from './SignupButton.jsx'

class LandingPage extends React.Component {

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">

            <div className="col s6 offset-s1">
              filler
            </div>

            <div className="col s3">
              <LoginForm />
              <SignupButton />
            </div>
            
          </div>
        </div>
      </section>

    );
  }
}

export default LandingPage;
