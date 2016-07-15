import React from 'react';

class Instructions extends React.Component {

  render() {
    const instructions = this.props.instructions
    let counter = 0

    return(
      <ul>
        <h5>Instructions</h5>
        {instructions.map(function(instruction) {
          counter += 1
          return(
            <li>{counter}) {instruction}</li>
          );
        })}
      </ul>
    ); 
  }
}

export default Instructions;
