import React from 'react';

class Ingredient extends React.Component {

  constructor(props) {
    super(props);

    this.state = { ingredient: '' };
  };

  render() {
    let ic = this.props.ic;

    return(
      <li>
        <label htmlFor={'ingredient' + ic} ></label>
        <p className="control">
          <input 
            className="input"
            placeholder="Add Ingredient"
            type='text' 
            onChange={ this.handleChange.bind(this) } 
          />
        </p>
      </li> 
    ); 
  }

  // updates the parent state with the input data
  handleChange(e) {
    let data = e.target.value;
    this.props.updateState(+this.props.ic - 1, data);
  }

}

export default Ingredient;
