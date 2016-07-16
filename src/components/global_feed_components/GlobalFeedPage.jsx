import React from 'react';
import fetch from 'isomorphic-fetch';
import GlobalFeedHeader from './GlobalFeedHeader.jsx';
import RecipeCard from '../utility_components/RecipeCard.jsx'

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsInVzZXJuYW1lIjoiSGFtYnVyZ2VybWFuIiwicGFzc3dvcmQiOiIkMmEkMTAkd3lJVG5tdEVyMjBHZHRZZ0xBZDc5TzhKSnJqMTBzRFFlNUlmUWpOT3RJS0Q0MnlVR2trdXEiLCJlbWFpbCI6IjEyMzQ1NkAxMjM0NTYuMTIzNDU2IiwiYmx1cmIiOiJJIGFtIGEgaGFtYnVyZ2VyLiIsInVzZXJfcGhvdG8iOiJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2hlaXJsb29tLXRvcm9udG8vNjY1MWZhYTctN2ViYy00YWVkLWI2Y2YtNDQyOWIxZGYyNTk2X3VzZXIxLnBuZyIsImlhdCI6MTQ2ODYxNTk5OCwiZXhwIjoxNDY4NzAyMzk4fQ.JsGjIFFhxlvjuAxAQRIQvq_UF1LwP0iLbRfp5XbgcXI'

class GlobalFeedPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipes: []
    }
  }

  // fetches all recipes upon mount
  componentDidMount() {
    this.fetchAllRecipes()
  }

  render() {
    const { recipes } = this.state;
    const renderNewPage = this.props.renderNewPage;

    return(
          <div className="global-feed-page container">
            <div className="columns">

              <div className="column is-3 is-offset-4 global-feed-content">
                <GlobalFeedHeader renderNewPage={renderNewPage}/>

                <div className='recipe-container'>
                  {recipes.map(recipe => <RecipeCard 
                                          recipe={recipe} 
                                          renderNewPage={renderNewPage}
                                        />
                  )}
                </div>

              </div>

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

}

export default GlobalFeedPage;