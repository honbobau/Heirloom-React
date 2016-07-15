import React from 'react';
import SignupFormInfo from './SignupFormInfo.jsx';
import SignupFormPhoto from './SignupFormPhoto.jsx';
import SignupPreview from './SignupPreview.jsx';
import SignupForm from './SignupForm.jsx'

class SignupPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  };

  render() {
    return (

      <div className="container signup-page">
        <div className="columns">

          <div className="column is-4 is-offset-2">
            <SignupForm />
          </div>

          <div className="column is-4">
            <SignupPreview />
          </div>
          
        </div>
      </div>
    );
  }
}

export default SignupPage;
