import React from 'react';
import ReactDOM from 'react-dom';
import Instruction from './Instruction.jsx'

let instructionCounter = 1

class RecipeNewEditInstructions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      instructionInputs: [],
      ic: 2
    }
  };

  render() {

    const input = this.state.instructionInputs
    const ic = this.state.ic;

    return(
      <form className="new-recipe-form">
        <h4 className="instructions-header">Add instructions</h4>

        <label htmlFor="instruction1"></label>
        <input type="text" ref="instruction1" />

        <div id="add-instructions">
          {input}
        </div>

        <button onClick={ this.addInstruction }>+</button>
        <button onClick={ this.props.previousStep }>Back</button>
        <button onClick={ this.nextStep }>Next</button>
      </form>
    );
  }

  addInstruction = (ev) => {
    ev.preventDefault();

    let refCount = this.state.ic
    let input = this.state.instructionInputs.concat(<Instruction ic={refCount} />);
    refCount += 1
    
    this.setState({
      instructionInputs: input,
      ic: refCount
    })
  }

}

export default RecipeNewEditInstructions;
