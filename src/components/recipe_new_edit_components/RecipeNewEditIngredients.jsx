import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx';

class RecipeNewEditIngredients extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newInputs: [],
      ingredients: []
    }
  };

  // rendering
  render() {

    const input = this.state.newInputs

    return(
      <form className="new-recipe-form">
        <h4 className="ingredients-header">Add ingredients</h4>

        <ul id="add-ingredients">
          { this.renderNewInputs() }
        </ul>

        <button className='button' onClick={ this.addIngredient }>+</button>
        <button className='button' onClick={ (e) => this.saveAndContinue(e) }>Next</button>
      </form>
    );
  }

  // renders the new inputs
  renderNewInputs = () => {
    let ic = this.state.ic
    let updateState = this.updateState

    return(
      <div>
        <Ingredient key='1' ic='1' updateState={updateState}/>
        {this.state.newInputs.map(function(new_input) {
          return (
            <Ingredient 
              key={new_input.ic} 
              ic={new_input.ic}
              updateState={updateState} 
            />
          );
        })}
      </div>
    );
  }

  // adds new ingredient form to the state
  addIngredient = (ev) => {
    ev.preventDefault();

    this.setState({
      newInputs: [...this.state.newInputs, {
        ic: this.state.newInputs.length + 2
      }],
    })
  }

  // updates the state once each input changes
  updateState = (ic, data) => {
    let ingredients = this.state.ingredients
    this.setState({
      ingredients: [...ingredients.slice(0, ic), data, ...ingredients.slice(ic + 1)]
    }) 
  }

  // saves the ingredients and renders instruction page
  saveAndContinue = (ev) => {
    ev.preventDefault();

    this.props.saveIngredients(this.state.ingredients)
    this.props.nextStep()
  }
}

export default RecipeNewEditIngredients;
