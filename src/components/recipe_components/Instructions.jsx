import React from 'react';

class Instructions extends React.Component {

  constructor(props) {
    super(props);

    this.state = { display: true };
  }

  render() {
    const instructions = this.props.instructions;
    let display        = this.state.display;
    const isDisplayed  = display ? 'show' : 'hidden';
    const isActive     = display ? 'button active' : 'button inactive';

    return(
      <div>
        <button className={isActive} onClick={this.handleClick}><strong>Instructions</strong></button>
        <ul className={isDisplayed}>
          {instructions.map(function(instruction) {
            return(
              <li><i className='fa fa-check-circle'></i> {instruction}</li>
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
