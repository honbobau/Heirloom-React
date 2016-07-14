import React from 'react';
import fetch from 'isomorphic-fetch';
import GlobalFeedHeader from './GlobalFeedHeader.jsx';
import RecipeCard from '../utility_components/RecipeCard.jsx'

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODUzNjExMSwiZXhwIjoxNDY4NjIyNTExfQ.ZOWVVuRvibE1wwzA8uTgFJuVOjUXvrNVfjvod3IR-HA'

class GlobalFeedPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.fetchAllRecipes()
  }

  render() {
    console.log(this.state)
    const { recipes } = this.state;

    return(
      <div>
        <div>
          {/* header */}
        </div>
        <div>
          {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
        </div>
      </div>
    );
  }

  // fetches all recipes upon mount
  fetchAllRecipes = () => {
    fetch('http://localhost:3000/recipes' + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'   
      }
    })
    .then((recipes) => recipes.json())
    .then((recipes) => this.setRecipesInState(recipes))
    .catch(function(res){ console.log(res) })
  }

  // stores the recipes in state
  setRecipesInState = (recipes) => {
    this.setState({
      recipes: recipes
    })
    console.log(this.state.recipes)
  }

  // render recipe cards

}

export default GlobalFeedPage;