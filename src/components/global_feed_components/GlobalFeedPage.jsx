import React from 'react';
import fetch from 'isomorphic-fetch';
import GlobalFeedHeader from './GlobalFeedHeader.jsx';
import RecipeCard from '../utility_components/RecipeCard.jsx'

const token = '?token=' + window.localStorage.token;

class GlobalFeedPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { recipes: [] }
  }

  // fetches all recipes upon mount
  componentDidMount() { this.fetchAllRecipes() }

  render() {
    const { recipes } = this.state;
    const renderNewPage = this.props.renderNewPage;

    return(
      <div className="global-feed-page container">
        <div className="columns">

          <div className="column is-3 is-offset-4 global-feed-content">
            <GlobalFeedHeader 
              renderNewPage={renderNewPage}
              setRecipesInState={this.setRecipesInState}
            />

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
    .then((recipes) => { console.log(recipes); return recipes; })
    .then((recipes) => this.setRecipesInState(recipes))
    .catch(function(res){ console.log(res) })
  }

  // stores the recipes in state
  setRecipesInState = (recipes) => {
    this.setState({ recipes: recipes })
    console.log(this.state.recipes)
  }

}

export default GlobalFeedPage;