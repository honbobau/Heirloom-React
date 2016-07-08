import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (

      <form id="login-form">
        <label htmlFor="login-username">Username</label>
        <input type="text" id="login-username" />

        <label htmlFor="login-password">Password</label>
        <input type="text" id="login-password" />

        <button type="submit">gdsdg</button>
      </form>  

    );
  }
}

export default LoginForm;