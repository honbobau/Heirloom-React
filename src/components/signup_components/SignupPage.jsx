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

      <div className="container">
        <div className="row">

          <div className="col s3 offset-s1">
            <SignupForm />
          </div>

          <div className="col s6">
            <SignupPreview />
          </div>
          
        </div>
      </div>
    );
  }
}

export default SignupPage;
