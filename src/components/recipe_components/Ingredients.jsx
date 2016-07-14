import React from 'react';

class Ingredients extends React.Component {

  render() {
    const ingredients = this.props.ingredients

    return(
      <ul>
        <h5>Ingredients</h5>
        {ingredients.map(function(ingredient) {
          return(
            <li>{ingredient}</li>
          );
        })}
      </ul>
    );
  }
}

export default Ingredients;
