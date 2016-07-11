import React from 'react';

class SignupFormPhoto extends React.Component {

  render() {
    return(

      <form id="signup-form-photo">
        <label htmlFor="signup-photo">Photo</label>
        <input type="text" id="signup-photo" />

        <label htmlFor="signup-blurb"></label>
        <input type="text" id="signup-blurb" />
      </form>
    );
  }
}

export default SignupFormPhoto;