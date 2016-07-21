import React from 'react';

class Ingredients extends React.Component {

  constructor(props) {
    super(props);

    this.state = { display: true };
  }

  render() {
    const ingredients = this.props.ingredients;
    let display       = this.state.display;
    const isDisplayed = display ? 'show' : 'hidden';
    const isActive    = display ? 'button active' : 'button inactive';

    return(
      <div>
        <button className={isActive} onClick={this.handleClick}><strong>Ingredients</strong></button>
        <ul className={isDisplayed}>
          {ingredients.map(function(ingredient) {
            return(
              <li ><i className='fa fa-leaf'></i> {ingredient}</li>
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

export default Ingredients;
