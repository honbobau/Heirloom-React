import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

class SignupFormInfo extends React.Component {

  render() {
    return(
      <form>
        <h2 className="signup-header">WELCOME TO HEIRLOOM</h2>
        <label htmlFor="signup-username">Username</label>
        <p className="control">
          <input className="input" type="text" ref="username" />
        </p>

        <label htmlFor="password">Password</label>
        <p className="control">
          <input className="input" type="password" ref="password" />
        </p>

        <label htmlFor="email">Email</label>
        <p className="control">
          <input className="input" type="text" ref="email" />        
        </p>

        <button className="button is-success" onClick={ this.saveAndContinue }>Next</button>
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