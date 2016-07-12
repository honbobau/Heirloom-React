import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx';

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
        <input type="text" ref="ingredient1" key="key1"/>

        <div id="add-ingredients">
          {input}
        </div>

        <button onClick={ this.addIngredient }>+</button>
        <button onClick={ this.saveAndContinue }>Next</button>
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

  saveAndContinue = (ev) => {
    ev.preventDefault();

    let data = []
    let ref

    console.log(this.state.ic - 1)

    for (var i = 1; i <= this.state.ic - 1; i++) {
      ref = 'ingredient' + i
      console.log(ref)

      data.push(ReactDOM.findDOMNode(this.refs[ref]).value)
      console.log(data)
    }

    this.props.saveIngredients(data)
    this.props.nextStep()
  }
}

export default RecipeNewEditIngredients;
