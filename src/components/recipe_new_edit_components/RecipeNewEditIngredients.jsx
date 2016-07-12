import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx'

let ingredientCounter = 1

class RecipeNewEditIngredients extends React.Component {

  render() {
    return(
      <form className="new-recipe-form">
        <h4 className="ingredients-header">Add ingredients</h4>

        <label htmlFor="ingredient1"></label>
        <input type="text" ref="ingredient1" />

        <div id="add-ingredients"></div>

        <button onClick={ this.addIngredient }>+</button>
      </form>
    );
  }

  addIngredient = (ev) => {
    ev.preventDefault();

    ReactDOM.render(<Ingredient ingredientCounter={ingredientCounter} />, document.getElementById('add-ingredients'))
    ingredientCounter += 1
  }

}

export default RecipeNewEditIngredients;
