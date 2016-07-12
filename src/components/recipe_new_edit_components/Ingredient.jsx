import React from 'react';

class Ingredient extends React.Component {
  render() {
    const ic = this.props.ic

    return(
      <li>
        <label htmlFor={'ingredient' + ic} ></label>
        <input type='text' ref={'ingredient' + ic} />
      </li> 
    ); 
  }
}

export default Ingredient;
