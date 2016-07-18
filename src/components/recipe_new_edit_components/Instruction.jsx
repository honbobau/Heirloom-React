import React from 'react';

class Instruction extends React.Component {

  render() {
    let ic = this.props.ic;

    return(
      <li>
        <label htmlFor={'instruction' + ic} ></label>
        <input 
          type='text' 
          onChange={this.handleChange.bind(this)} 
        />
      </li> 
    ); 
  }

  handleChange(e) {
    let data = e.target.value
    this.props.updateState(+this.props.ic - 1, data)
  }

}

export default Instruction;
