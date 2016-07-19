import React from 'react';

class Instructions extends React.Component {

  render() {
    const instructions = this.props.instructions
    let counter = 0

    return(
      <ul>
        {instructions.map(function(instruction) {
          counter += 1
          return(
            <li><div className='recipe-instruction-counter'><h4>{counter}</h4></div> {instruction}</li>
          );
        })}
      </ul>
    ); 
  }
}

export default Instructions;
