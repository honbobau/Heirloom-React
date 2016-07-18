import React from 'react';
import UserFeedHeader from './UserFeedHeader.jsx'
import RecipeCard from '../utility_components/RecipeCard.jsx'

const token = '?token=' + window.localStorage.token;

class UserFeedPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { recipes: [] }
  }

  // fetches all recipes upon mount
  componentDidMount() { this.fetchAllRecipes() }

  render() {
    const { recipes } = this.state;
    const renderNewPage = this.props.renderNewPage;
    let noRecipes;

    if (this.state.recipes.length === 0) {
      noRecipes = ( <p> You have no recipes </p> )
    }

    return(
      <div className="user-feed-page container">
        <div className="columns">
          <div className="column is-3 user-feed-content">
            <UserFeedHeader renderNewPage={renderNewPage}/>

            <div className='recipe-container'>
            { noRecipes }
              {recipes.map(recipe => <RecipeCard 
                                      recipe={recipe} 
                                      renderNewPage={renderNewPage}
                                     />
              )}
            </div>

          </div>

        </div>
      </div>
    )
  }

  // fetches all recipes upon mount
  fetchAllRecipes = () => {
    fetch(`http://localhost:3000/user/${window.localStorage.current_id}/recipes` + token, {
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
    recipes.reverse()
    this.setState({ recipes: recipes })
  }

}

export default UserFeedPage;