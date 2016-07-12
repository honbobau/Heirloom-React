import React from 'react';

class Ingredient extends React.Component {

  render() {

    let ic = this.props.ingredientCounter

    return(
      <div>
        <label htmlFor={'ingredient' + ic}></label>
        <input type="text" ref={'ingredient' + ic} />
      </div>
    );
  }
}

export default Ingredient;
