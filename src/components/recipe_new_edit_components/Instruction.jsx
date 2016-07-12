import React from 'react';

const Instruction = (props) => {
  const ic = props.ic

  return(
    <div>
      <label htmlFor={'instruction' + ic}></label>
      <input type="text" ref={'instruction' + ic} />
    </div> 
  ); 
}

export default Instruction;
