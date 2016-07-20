import React from 'react';

class Ingredients extends React.Component {

  constructor(props) {
    super(props);

    this.state = { display: true }
  }

  render() {
    const ingredients = this.props.ingredients;
    let display       = this.state.display;
    const isDisplayed = display ? '' : 'hidden';

    return(
      <div>
        <button className='button' onClick={this.handleClick}>Ingredients</button>  
        <ul className={isDisplayed}>
          {ingredients.map(function(ingredient) {
            return( <li> > {ingredient}</li> );
          })}
        </ul>
      </div>
    );
  }
  handleClick = (ev) => {
    ev.preventDefault;

    this.setState({ display: !this.state.display })
  }

}

export default Ingredients;