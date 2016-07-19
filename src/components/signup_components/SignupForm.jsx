import React from 'react';
import fetch from 'isomorphic-fetch';
import SignupFormInfo from './SignupFormInfo.jsx';
import SignupFormPhoto from './SignupFormPhoto.jsx';
import SignupFormConfirm from './SignupFormConfirm.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODUzNjExMSwiZXhwIjoxNDY4NjIyNTExfQ.ZOWVVuRvibE1wwzA8uTgFJuVOjUXvrNVfjvod3IR-HA'

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      state: 1,
      username: '',
      password: '',
      email:    '',
      photoURL: '',
      blurb:    ''
    }
  };

  render() {
   const renderNewPage = this.props.renderNewPage

    switch(this.state.state) {
      case 1: 
        return <SignupFormInfo 
                  nextStep={this.nextStep}
                  saveValuesInfo={this.saveValuesInfo}
               />
      case 2:
        return <SignupFormPhoto 
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveBlurb={this.saveBlurb}
                  savePhotoURL={this.savePhotoURL}
                  submitForm={this.submitForm} 
               />
      case 3:
        return <SignupFormConfirm 
                 username={this.state.username} 
                 renderNewPage={renderNewPage}
               />
    }
  }

  saveValuesInfo = (data) => {
    this.setState({
      username: data.username,
      password: data.password,
      email:    data.email
    })
  }

  // saves the blurb
  saveBlurb = (data) => {
    this.setState({ blurb: data })
  }

  // saves the photo url
  savePhotoURL = (url) => {
    this.setState({ photoURL: url })
  }

  // renders the next step of the form
  nextStep = () => {
    this.setState({ state : this.state.state + 1 })
  }

  // renders the previous step of the form
  previousStep = () => {
    this.setState({ state : this.state.state - 1 })
  }

  submitForm = (callback) => {
    const username = this.state.username;
    const password = this.state.password;
    const email    = this.state.email;
    const photoURL = this.state.photoURL;
    const blurb    = this.state.blurb;

    fetch('http://localhost:3000/users' + token, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:   username,
        password:   password,
        email:      email,
        blurb:      blurb,
        user_photo: photoURL
      })
    })
    .then((user) => user.json())
    .then((user) => {
      window.localStorage.setItem('token', user.token)
      window.localStorage.setItem('current_id', user.id)
    })
    .then(callback)
    .catch(function(res){ console.log(res) })
  }

}

export default SignupForm;