import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (

      <form id="login-form">
        <label htmlFor="login-username">Username</label>
        <input type="text" id="login-username" />
        <span className="login-error"></span>

        <label htmlFor="login-password">Password</label>
        <input type="text" id="login-password" />
        <span className="login-error"></span>

        <button type="submit" className="btn">Log In</button>
        {/* upon successful login, page rerenders to UserFeedPage */}
      </form>  

    );
  }
}

export default LoginForm;