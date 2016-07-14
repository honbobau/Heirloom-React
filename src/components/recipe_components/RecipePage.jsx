import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';
import Instructions from './Instructions.jsx';
import DescriptionTags from './DescriptionTags.jsx';
import Image from './Image.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODQ0ODc2NywiZXhwIjoxNDY4NTM1MTY3fQ.Fk33QeqOD9H0XMI5tiSRAkUPBHyeiPiW8rRSvF7O8Kc'

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipe:       [],
      ingredients:  [],
      instructions: [],
      description:  '',
      tags:         '',
      photoURL:     ''
    }
  }

  componentDidMount() {
    this.fetchRecipeComponents()
  }

  render() {
    return(
      <div>
        <header>
          {/* header content */}
        </header>

        <section className="recipe-display-description">
          <DescriptionTags description={this.state.description} />
        </section>

        <section className="recipe-display-photo">
          <Image imageURL={this.state.photoURL} />
        </section>

        <section className="recipe-display-ingredients">
          <Ingredients ingredients={this.state.ingredients} />
        </section>

        <section className="recipe-display-instructions">
          <Instructions instructions={this.state.instructions} />
        </section>

      </div>
    );
  }

  // fetches the recipe from the database
  fetchRecipeComponents = () => {
    fetch('http://localhost:3000/recipes/218' + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
    .then((recipe) => recipe.json())
    .then((recipe) => this.setState({ recipe: recipe }) )
    .then(this.fetchRecipeIngredients)
    .then(this.fetchRecipeInstructions)
    .then(this.fetchRecipeDescription)
    .then(this.fetchRecipePhoto)
    .catch(function(recipe){ console.log(recipe) })
  }

  // fetches the ingredients from the recipe
  fetchRecipeIngredients = () => {
    this.setState({
      ingredients: this.state.recipe[0].recipe.ingredients
    })
    console.log(this.state.ingredients)
  }

  // fetches the instructions from the recipe
  fetchRecipeInstructions = () => {
    this.setState({
      instructions: this.state.recipe[0].recipe.instructions
    })
    console.log(this.state.instructions) 
  }

  // fetches the description attached to the recipe
  fetchRecipeDescription = () => {
    this.setState({
      description: this.state.recipe[0].recipe.description
    })
    console.log(this.state.description) 
  }

  // fetches the photo attached to the recipe from the database
  fetchRecipePhoto = () => {
    this.setState({
      photoURL: this.state.recipe[0].photos[0].filepath
    })
    console.log(this.state.description) 
  }

}

export default RecipePage;