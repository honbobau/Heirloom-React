import React from 'react';
import SignupFormInfo from './SignupFormInfo.jsx';
import SignupFormPhoto from './SignupFormPhoto.jsx';
import SignupPreview from './SignupPreview.jsx';
import SignupForm from './SignupForm.jsx'

class SignupPage extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;

    return (

      <div className="container signup-page">
        <div className="columns">

          <div className="column is-4 is-offset-2">
            <SignupForm renderNewPage={renderNewPage}/>
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
