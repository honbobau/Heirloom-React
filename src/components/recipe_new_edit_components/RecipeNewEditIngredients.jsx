import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx';

class RecipeNewEditIngredients extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newInputs: [],
      // ic: 2
    }
  };

  // renders the new inputs
  renderNewInputs = () => {
    let ic = this.state.ic
    return(
      <div>
        <Ingredient key='1' ic='1' />
        {this.state.newInputs.map(function(new_input) {
           return <Ingredient key={new_input.ic} ic={new_input.ic} />
        })}
      </div>
    );
  }

  render() {

    const input = this.state.newInputs
    // const ic = this.state.ic;

    return(
      <form className="new-recipe-form">
        <h4 className="ingredients-header">Add ingredients</h4>

        <ul id="add-ingredients">
          {/* <li>
            <label htmlFor="ingredient1"></label>
            <input type="text" ref="ingredient1" key="key1"/>
          </li> */}
          { this.renderNewInputs() }
        </ul>

        <button onClick={ this.addIngredient }>+</button>
        <button onClick={ this.saveAndContinue }>Next</button>
      </form>
    );
  }

  // adds new ingredient form to the state
  addIngredient = (ev) => {
    ev.preventDefault();

    // let refCount = this.state.ic
    // let input = this.state.newInputs.push('1');
    // refCount += 1
    this.setState({
      newInputs: [...this.state.newInputs, {
        ic: this.state.newInputs.length + 2
      }],
      // ic: refCount
    })
  }


  // saves the ingredients and renders instruction page
  saveAndContinue = (ev) => {
    ev.preventDefault();

    let data = []
    let ref
    const {newInputs} = this.state;


    for (var i = 1; i < newInputs.length + 1; i++) {
      ref = 'ingredient' + i
      console.debug(ref)
      data.push(ReactDOM.findDOMNode(this.refs[ref]).value)
      console.log(data)
    }

    this.props.saveIngredients(data)
    this.props.nextStep()
  }
}

export default RecipeNewEditIngredients;
