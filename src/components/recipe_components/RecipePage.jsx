import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODQ0ODc2NywiZXhwIjoxNDY4NTM1MTY3fQ.Fk33QeqOD9H0XMI5tiSRAkUPBHyeiPiW8rRSvF7O8Kc'

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipe: []
    }
  }

  componentDidMount() {
    this.setState({
      recipe: this.fetchRecipe()
    })
    console.log(this.state.recipe)
  }

  render() {
    return(
      <div>
        <header>
          {/* header */}
        </header>

        <section>
          {/* picture */}
        </section>

        <section>
          <Ingredients />
        </section>

        <section>
          {/* instructions */}
        </section>

        <section>
          {/* description */}
        </section>
      </div>
    );
  }

  // fetches the recipe from the database
  fetchRecipe = () => {
    fetch('http://localhost:3000/recipes/71' + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
    .then((recipe) => recipe.json())
    .then((recipe) => { console.log(recipe) })
    .catch(function(recipe){ console.log(recipe) })
  }

  // fetches the ingredients from the recipe
  fetchRecipeIngredients = () => {

  }

  // fetches the instructions from the recipe
  fetchRecipeInstructions = () => {
    
  }

  // fetches the description attached to the recipe
  fetchRecipeDescription = () => {

  }

  // fetches the photo attached to the recipe from the database
  fetchRecipePhoto = () => {

  }

}

export default RecipePage;