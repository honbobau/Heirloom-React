import React from 'react';

class Instructions extends React.Component {

  constructor(props) {
    super(props);

    this.state = { display: true };
  }

  render() {
    const instructions = this.props.instructions;
    let display        = this.state.display;
    const isDisplayed = display ? 'show' : 'hidden';
    const isActive    = display ? 'button active' : 'button inactive';
    let counter = 0;

    return(
      <div>
        <button className='button' onClick={this.handleclick}><strong>Instructions</strong></button>
        <ul className={isDisplayed}>
          {instructions.map(function(instruction) {
            counter += 1;
            return(
              <li><div className='recipe-instruction-counter'><h4>{counter}</h4></div> {instruction}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleClick = (ev) => {
    ev.preventDefault;
    this.setState({ display: !this.state.display });
  }

}

export default Instructions;
