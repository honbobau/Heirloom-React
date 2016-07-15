import React from 'react';

class SignupFormConfirm extends React.Component {

  render() {
    let username = this.props.username

    return(
      <div>
        Welcome aboard, {username}!
      </div>
    );
  }
  
}

export default SignupFormConfirm;