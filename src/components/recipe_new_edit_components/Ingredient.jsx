import React from 'react';

const Ingredient = (props) => {
  const ic = props.ic

  return(
    <div>
      <label htmlFor={'ingredient' + ic}></label>
      <input type="text" ref={'ingredient' + ic} />
    </div> 
  ); 
}

export default Ingredient;
