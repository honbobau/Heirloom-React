import React from 'react';
import ReactDOM from 'react-dom';
import Instruction from './Instruction.jsx';

class RecipeNewEditInstructions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newInputs: [],
      instructions: []
    }

  };

  // rendering
  render() {

    const input = this.state.newInputs

    return(
      <form className="new-recipe-form">
        <h4 className="instructions-header">Add instructions</h4>

        <ul id="add-instructions">
          { this.renderNewInputs() }
        </ul>

        <button onClick={ this.addInstruction }>+</button>
        <button onClick={ (e) => this.saveAndContinue(e) }>Next</button>
      </form>
    );
  }

  // renders the new inputs
  renderNewInputs = () => {
    let ic = this.state.ic
    let updateState = this.updateState

    return(
      <div>
        <Instruction key='1' ic='1' updateState={updateState}/>
        {this.state.newInputs.map(function(new_input) {
          return (
            <Instruction 
              key={new_input.ic} 
              ic={new_input.ic}
              updateState={updateState} />
          );
        })}
      </div>
    );
  }

  // adds new instruction form to the state
  addInstruction = (ev) => {
    ev.preventDefault();

    this.setState({
      newInputs: [...this.state.newInputs, {
        ic: this.state.newInputs.length + 2
      }],
    })
  }

  // updates the state once each input changes
  updateState = (ic, data) => {
    let instructions = this.state.instructions
    this.setState({
      instructions: [...instructions.slice(0, ic), data, ...instructions.slice(ic + 1)]
    }) 
    console.log(this.state.instructions)
  }

  // saves the instructions and renders instruction page
  saveAndContinue = (ev) => {
    ev.preventDefault();

    console.log(this.state.instructions)
    this.props.saveInstructions(this.state.instructions)
    this.props.nextStep()
  }
}

export default RecipeNewEditInstructions;
