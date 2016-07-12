import React from 'react';
import Ingredient from './Ingredient.jsx'

class RecipeNewEditIngredients extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ingredientInputs: [],
      ic: 2
    }
  };

  render() {

    const input = this.state.ingredientInputs
    const ic = this.state.ic;

    return(
      <form className="new-recipe-form">
        <h4 className="ingredients-header">Add ingredients</h4>

        <label htmlFor="ingredient1"></label>
        <input type="text" ref="ingredient1" />

        <div id="add-ingredients">
          {input}
        </div>

        <button onClick={ this.addIngredient }>+</button>
        <button onClick={ this.props.nextStep }>Next</button>
      </form>
    );
  }

  addIngredient = (ev) => {
    ev.preventDefault();

    let refCount = this.state.ic
    let input = this.state.ingredientInputs.concat(<Ingredient ic={refCount} />);
    refCount += 1
    
    this.setState({
      ingredientInputs: input,
      ic: refCount
    })
  }

}

export default RecipeNewEditIngredients;
