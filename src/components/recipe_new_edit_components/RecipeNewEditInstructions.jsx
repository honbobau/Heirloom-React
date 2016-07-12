import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx'

let instructionCounter = 1

class RecipeNewEditInstructions extends React.Component {

  render() {
    return(
      <form className="new-recipe-form">
        <h4 className="ingredients-header">Add ingredients</h4>

        <label htmlFor="ingredient1"></label>
        <input type="text" ref="ingredient1" />

        <div id="add-instructions"></div>

        <button onClick={ this.addInstruction }>+</button>
      </form>
    );
  }

  addInstruction = (ev) => {
    ev.preventDefault();

    ReactDOM.render(<Ingredient instructionCounter={instructionCounter} />, document.getElementById('add-instructions'))
    instructionCounter += 1
  }

}

export default RecipeNewEditInstructions;
