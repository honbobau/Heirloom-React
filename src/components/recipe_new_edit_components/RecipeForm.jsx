import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';
import RecipeNewEditPhoto from './RecipeNewEditPhoto.jsx';

const token = '?token=' + window.localStorage.token;

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 1,
      ingredients: [],
      instructions: [],
      photo: '',
      description: ''
    };
  }

  render() {

    switch(this.state.state) {
    case 1:
      return(
          <section className='new-recipe-form'>
            <RecipeNewEditIngredients
              saveIngredients={this.saveIngredients}
              nextStep={this.nextStep}
            />
          </section>
        );

    case 2:
      return(
          <section className='new-recipe-form'>
            <RecipeNewEditInstructions
              saveInstructions={this.saveInstructions}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
            />
          </section>
          );

    case 3:
      return(
          <section className='new-recipe-form'>
            <RecipeNewEditPhoto
              savePhoto={this.savePhoto}
              saveDescription={this.saveDescription}
              submitForm={this.submitForm}
              previousStep={this.previousStep}
            />
          </section>
          );
    }
  }

  // returns to the previous form component
  previousStep = (ev) => {
    ev.preventDefault();

    this.setState({ state: this.state.state - 1 });
  }

  // renders the next form component
  nextStep = () => {
    this.setState({ state: this.state.state + 1 });
  }

  // save form ingredients to state
  saveIngredients = (data) => {
    let ingredients = this.state.ingredients;
    this.setState({ ingredients: [...ingredients, ...data] });
  }

  // save form instructions to state
  saveInstructions = (data) => {
    let instructions = this.state.instructions;
    this.setState({ instructions: [...instructions, ...data] });
  }

  // save photo upload to state
  savePhoto = (data) => {
    this.setState({ photo: data });
  }

  // save description to state
  saveDescription = (data) => {
    let description = this.state.description;
    this.setState({ description: data });
  }

  // makes photo ajax call using
  submitPhoto = (id, url) => {
    fetch('https://heirloom-api.herokuapp.com/recipes/photos' + token, {
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filepath:  url,
        recipe_id: id
      })
    });
  }

  // makes ajax post to server with recipe for then with photo form
  submitForm = () => {
    let user_id      = window.localStorage.current_id;
    let ingredients  = this.state.ingredients;
    let instructions = this.state.instructions;
    let description  = this.state.description;
    let photo        = this.state.photo;
    let currentDate  = new Date();

    fetch('https://heirloom-api.herokuapp.com/recipes' + token, {
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
    .then((object) => { this.submitPhoto(object[0].id, photo); })
    .then((object) => this.props.renderNewPage('UserFeedPage'))
    .catch(function(res) { console.log(res); 
    });
  }
}

export default RecipeForm;
