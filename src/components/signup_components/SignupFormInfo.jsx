import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

class SignupFormInfo extends React.Component {

  render() {
    return(
      <form>
        <label htmlFor="signup-username">Username</label>
        <input type="text" 
               ref="username" />

        <label htmlFor="password">Password</label>
        <input type="text" 
               ref="password" />

        <label htmlFor="email">Email</label>
        <input type="text" 
               ref="email" />        

        <button onClick={ this.saveAndContinue }>Next</button>
      </form>
    );
  }

  saveAndContinue = (ev) => {
    ev.preventDefault();

    let data = {
      username : ReactDOM.findDOMNode(this.refs.username).value,
      password : ReactDOM.findDOMNode(this.refs.password).value,
      email    : ReactDOM.findDOMNode(this.refs.email).value
    }

    this.props.saveValuesInfo(data)
    this.props.nextStep()
  }

}

export default SignupFormInfo;