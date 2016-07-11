import React from 'react';

class SignupFormInfo extends React.Component {

  render() {
    return(

      <form id="signup-form-info">
        <label htmlFor="signup-username">Username</label>
        <input type="text" id="signup-username" />

        <label htmlFor="signup-password">Password</label>
        <input type="text" id="signup-password" />

        <label htmlFor="signup-email">Email</label>
        <input type="text" id="signup-email" />        
      </form>
    );
  }

}

export default SignupFormInfo;