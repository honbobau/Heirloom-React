import React from 'react';
import ReactDOM from 'react-dom';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';

let ingredients = [];
let instructions = [];

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: 1
    }
  }

  render() {

    switch(this.state.state) {
    case 1: 
      return <RecipeNewEditIngredients 
                ingredients={ingredients}
                saveIngredients={this.saveIngredients}
                nextStep={this.nextStep} /> 

    case 2:
      return <RecipeNewEditInstructions
                instructions={instructions}
                nextStep={this.nextStep}
                previousStep={this.previousStep} />
    }
  }

  saveIngredients = (input) => {
    ingredients = input;
    console.log(ingredients);
  }

  saveInstructions = (instructions) => {

  }

  nextStep = () => {
    this.setState({
      state: this.state.state + 1
    })
  }

  previousStep = (ev) => {
    ev.preventDefault()

    this.setState({
      state: this.state.state - 1
    })
  }

  submitForm = () => {

  }

}

export default RecipeForm;
