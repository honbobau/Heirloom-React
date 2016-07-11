import React from 'react';
import SignupFormInfo from './SignupFormInfo.jsx';
import SignupFormPhoto from './SignupFormPhoto.jsx';
import SignupPreview from './SignupPreview.jsx';

class SignupPage extends React.Component {

  render() {
    return (

      <div className="container">
        <div className="row">

          <div className="col s3 offset-s1">
            <SignupFormInfo />
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
