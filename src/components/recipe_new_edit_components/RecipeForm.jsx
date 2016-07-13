import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';
import RecipeNewEditPhoto from './RecipeNewEditPhoto.jsx';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODQyNTMxOSwiZXhwIjoxNDY4NTExNzE5fQ.iPFah2XEt0NhKWUo_ZXSaV5KYEeu2S_yavgv8SCSu5U'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: 1,
      ingredients: [],
      instructions: [],
      photo: [],
      description: '',
      created_at: ''
    }
  }

  render() {

    switch(this.state.state) {
    case 1: 
      return(<RecipeNewEditIngredients 
                saveIngredients={this.saveIngredients}
                nextStep={this.nextStep} /> 
            );

    case 2:
      return(<RecipeNewEditInstructions
                saveInstructions={this.saveInstructions}
                nextStep={this.nextStep}
                previousStep={this.previousStep} />
            );

    case 3:
      return(<RecipeNewEditPhoto 
                savePhoto={this.savePhoto}
                saveDescription={this.saveDescription}
                submitForm={this.submitForm}
                previousStep={this.previousStep} />
            );
    }
  }

  // save form ingredients to state
  saveIngredients = (data) => {
    console.log(data)
    let ingredients = this.state.ingredients

    this.setState({
      ingredients: [...ingredients, ...data]
    })
    console.log(this.state.ingredients)

  }

  // save form instructions to state
  saveInstructions = (data) => {
    console.log(this.state.instructions)

    let instructions = this.state.instructions
    this.setState({
      instructions: [...instructions, ...data]
    })
    console.log(this.state.instructions)
  }

  // save photo upload to state
  savePhoto = (data) => {

  }

  // save description to state
  saveDescription = (data) => {
    console.log(this.state.description)

    let description = this.state.description
    this.setState({
      description: data
    })

    console.log(this.state.description)
  }

  // renders the next form component
  nextStep = () => {
    this.setState({
      state: this.state.state + 1
    })
  }

  // returns to the previous form component
  previousStep = (ev) => {
    ev.preventDefault()

    this.setState({
      state: this.state.state - 1
    })
  }

  // makes ajax call using state information to the server
  submitForm = () => {
    fetch('http://localhost:3000/recipes?token=' + token, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients:  this.state.ingredients,
        instructions: this.state.instructions

      })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

}

export default RecipeForm;
