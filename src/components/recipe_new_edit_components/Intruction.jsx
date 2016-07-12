import React from 'react';

class Instruction extends React.Component {

  render() {

    let ic = this.props.instructionCounter

    return(
      <div>
        <label htmlFor={'instruction' + ic}></label>
        <input type="text" ref={'instruction' + ic} />
      </div>
    );
  }
}

export default Instruction;
