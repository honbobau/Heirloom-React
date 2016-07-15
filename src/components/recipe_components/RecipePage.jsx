import React from 'react';
import fetch from 'isomorphic-fetch';
import Ingredients from './Ingredients.jsx';
import Instructions from './Instructions.jsx';
import DescriptionTags from './DescriptionTags.jsx';
import Image from './Image.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsInVzZXJuYW1lIjoiSGFtYnVyZ2VybWFuIiwicGFzc3dvcmQiOiIkMmEkMTAkd3lJVG5tdEVyMjBHZHRZZ0xBZDc5TzhKSnJqMTBzRFFlNUlmUWpOT3RJS0Q0MnlVR2trdXEiLCJlbWFpbCI6IjEyMzQ1NkAxMjM0NTYuMTIzNDU2IiwiYmx1cmIiOiJJIGFtIGEgaGFtYnVyZ2VyLiIsInVzZXJfcGhvdG8iOiJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2hlaXJsb29tLXRvcm9udG8vNjY1MWZhYTctN2ViYy00YWVkLWI2Y2YtNDQyOWIxZGYyNTk2X3VzZXIxLnBuZyIsImlhdCI6MTQ2ODYxNTk5OCwiZXhwIjoxNDY4NzAyMzk4fQ.JsGjIFFhxlvjuAxAQRIQvq_UF1LwP0iLbRfp5XbgcXI'

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
    fetch('http://localhost:3000/recipes/223' + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json' 
      }
    })
    .then((recipe) => recipe.json())
    .then((recipe) => { console.log(recipe); return recipe; })
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