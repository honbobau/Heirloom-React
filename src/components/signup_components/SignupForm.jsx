import React from 'react';
import fetch from 'isomorphic-fetch';
import SignupFormInfo from './SignupFormInfo.jsx';
import SignupFormPhoto from './SignupFormPhoto.jsx';
import SignupFormConfirm from './SignupFormConfirm.jsx';

let userFormValues = {
  username:   null,
  password:   null,
  email:      null,
  user_photo: null,
  blurb:      null
}

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      state: 1
    }
  };

  render() {
 
    switch(this.state.state) {
      case 1: 
        return <SignupFormInfo 
                  userFormValues={userFormValues}
                  nextStep={this.nextStep}
                  saveValuesInfo={this.saveValuesInfo} />
      case 2:
        return <SignupFormPhoto 
                  userFormValues={userFormValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValuesPhoto={this.saveValuesPhoto}
                  submitForm={this.submitForm} />
      case 3:
        return <SignupFormConfirm 
                  username={userFormValues.username}/>
    }
  }

  saveValuesInfo = (data) => {
    userFormValues.username = data.username
    userFormValues.password = data.password
    userFormValues.email    = data.email
  }

  saveValuesPhoto = (data) => {
    userFormValues.user_photo = data.user_photo
    userFormValues.blurb      = data.blurb
  }

  nextStep = () => {
    this.setState({
      state : this.state.state + 1
    })
  }

  previousStep = () => {
    this.setState({
      state : this.state.state - 1
    })
  }

  submitForm = () => {
    console.log(userFormValues);
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:    userFormValues.username,
        password:    userFormValues.password,
        email:       userFormValues.email,
        blurb:       userFormValues.blurb,
        user_photo:  userFormValues.user_photo
      })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

}

export default SignupForm;