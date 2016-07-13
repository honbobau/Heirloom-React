import React from 'react';
import ReactDOM from 'react-dom';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';
import RecipeNewEditInstructions from './RecipeNewEditInstructions.jsx';
import RecipeNewEditPhoto from './RecipeNewEditPhoto.jsx';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      state: 1,
      ingredients: [],
      instructions: [],
      photo: []
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
                submitForm={this.submitForm} />
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

  }

}

export default RecipeForm;
