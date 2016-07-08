import React from 'react';
import UsernameInput from './'

class LoginForm extends React.Component {
  
  constructor() {
    super(props); 
  };

  render() {
    return (
      <div>
        <form id="login-form">
          <input ty />
          <button type="submit">gdsdg</button>
        </form>  
      </div>
    );
  }

}

class UsernameInput extends React.Component {
  render() {
    return (
      <input type="text"/>
    );
  }
}



export default LoginForm;