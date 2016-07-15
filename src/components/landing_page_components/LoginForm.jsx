import React from 'react';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODUzNjExMSwiZXhwIjoxNDY4NjIyNTExfQ.ZOWVVuRvibE1wwzA8uTgFJuVOjUXvrNVfjvod3IR-HA'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  };

  render() {

    return (
      <form id="login-form">
        <label htmlFor="login-username">Username</label>
        <div>
          <input type="text" onBlur={ this.setUsernameState.bind(this) }/>
        </div>

        <label htmlFor="login-password" >Password</label>
        <div>
          <input type="text" onBlur={ this.setPasswordState.bind(this) }/>
        </div>

        <button className="btn" onClick={ this.submitLogin }>Log In</button>
        {/* upon successful login, page rerenders to UserFeedPage */}
      </form>  

    );
  }

  // sets username state
  setUsernameState = (e) => {
    let username = e.target.value
    this.setState({
      username: username
    })
  }

  // sets password state
  setPasswordState = (e) => {
    let password = e.target.value
    this.setState({
      password: password
    })
  }

  // submits the form to backend
  submitLogin = (e) => {
    e.preventDefault() 

    const username = this.state.username;
    const password = this.state.password;

    fetch('http://localhost:3000/login' + token, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then((user) => user.json())
    .then((user) => {
      window.localStorage.setItem('token', user.token)
      window.localStorage.setItem('current_id', user.user)
    })
    .then((user) => console.log(user))
  }

}

export default LoginForm;