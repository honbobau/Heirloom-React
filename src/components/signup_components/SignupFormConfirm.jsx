import React from 'react';

class SignupFormConfirm extends React.Component {

  render() {
    let name = this.props.username

    return(
      <div>
        Welcome aboard, {name}!
      </div>
    );
  }
  
}

export default SignupFormConfirm;