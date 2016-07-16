import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';
import RecipeNewEditPhoto from './RecipeNewEditPhoto.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsInVzZXJuYW1lIjoiSGFtYnVyZ2VybWFuIiwicGFzc3dvcmQiOiIkMmEkMTAkd3lJVG5tdEVyMjBHZHRZZ0xBZDc5TzhKSnJqMTBzRFFlNUlmUWpOT3RJS0Q0MnlVR2trdXEiLCJlbWFpbCI6IjEyMzQ1NkAxMjM0NTYuMTIzNDU2IiwiYmx1cmIiOiJJIGFtIGEgaGFtYnVyZ2VyLiIsInVzZXJfcGhvdG8iOiJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2hlaXJsb29tLXRvcm9udG8vNjY1MWZhYTctN2ViYy00YWVkLWI2Y2YtNDQyOWIxZGYyNTk2X3VzZXIxLnBuZyIsImlhdCI6MTQ2ODYxNTk5OCwiZXhwIjoxNDY4NzAyMzk4fQ.JsGjIFFhxlvjuAxAQRIQvq_UF1LwP0iLbRfp5XbgcXI'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: 1,
      ingredients: [],
      instructions: [],
      photo: '',
      description: ''
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

  // returns to the previous form component
  previousStep = (ev) => {
    ev.preventDefault()

    this.setState({
      state: this.state.state - 1
    })
  }

  // renders the next form component
  nextStep = () => {
    this.setState({
      state: this.state.state + 1
    })
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
    let instructions = this.state.instructions
    this.setState({
      instructions: [...instructions, ...data]
    })
    console.log(this.state.instructions)
  }

  // save photo upload to state
  savePhoto = (data) => {
    this.setState({
      photo: data
    })
    console.log(this.state.photo)
  }

  // save description to state
  saveDescription = (data) => {
    let description = this.state.description
    this.setState({
      description: data
    })
    console.log(this.state.description)

  }

  // makes photo ajax call using 
  submitPhoto = (id, url) => {
    console.log(url)

    fetch('http://localhost:3000/recipes/photos' + token, { 
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filepath:  url,
        recipe_id: id
      })
    })
  }

  // makes ajax post to server with recipe for then with photo form
  submitForm = () => {
    let user_id      = window.localStorage.current_id;
    let ingredients  = this.state.ingredients;
    let instructions = this.state.instructions;
    let description  = this.state.description;
    let photo        = this.state.photo;
    let currentDate  = new Date();
    
    fetch('http://localhost:3000/recipes' + token, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id:      user_id,
        ingredients:  ingredients,
        instructions: instructions,
        description:  description,
        created_at:   currentDate
      })
    })
    .then((object) => object.json())
    .then((object) => { this.submitPhoto(object[0].id, photo) })
    .then(this.props.renderNewPage('UserFeedPage'))
    .catch(function(res){ console.log(res) })
  }
  

}

export default RecipeForm;