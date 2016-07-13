import React from 'react';
import ReactDOM from 'react-dom';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: 1,
      ingredients: [],
      intructions: []
    }
  }

  render() {

    switch(this.state.state) {
    case 1: 
      return <RecipeNewEditIngredients 
                saveIngredients={this.saveIngredients}
                nextStep={this.nextStep} /> 

    case 2:
      return <RecipeNewEditInstructions
                nextStep={this.nextStep}
                previousStep={this.previousStep} />
    }
  }

  saveIngredients = (data) => {
    console.log(data)
    this.setState({
      ingredients: [...this.state.ingredients, data]
    })
    console.log(this.state.ingredients)
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
