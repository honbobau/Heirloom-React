import React from 'react';
import UserFeedHeader from './UserFeedHeader.jsx'
import UserFeedRecipeCard from './UserFeedRecipeCard.jsx'

const token = '?token=' + window.localStorage.token;

class UserFeedPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { recipes: [] }
  }

  // fetches all recipes upon mount
  componentDidMount() { this.fetchAllRecipes() }
  componentWillUnmount() { window.localStorage.setItem('prevPage', 'UserFeedPage'); }

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
              {recipes.map(recipe => <UserFeedRecipeCard 
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
    fetch(`http://localhost:3000/user/${window.localStorage.current_id}/follows/recipes` + token, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'   
      }
    })
    .then((recipes) => recipes.json())
    .then((recipes) => this.consolidateRecipeArrays(recipes[0], recipes[1]) )
    .then((recipes) => this.sortRecipesByDate(recipes))
    .then((recipes) => this.setRecipesInState(recipes))
    .catch(function(res){ console.log(res) })
  }

  // consolidate recipe results 
  consolidateRecipeArrays = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i])
    }
    return arr1
  }

  // sorts the recipes by date, newest first
  sortRecipesByDate = (recipes) => {
    return recipes.sort(function(a, b){
      a = new Date(a.created_at);
      b = new Date(b.created_at);
      return a>b ? -1 : a<b ? 1 : 0;
    });
  }

  // stores the recipes in state
  setRecipesInState = (recipes) => {
    console.log(recipes);

    this.setState({ recipes: recipes })
  }

}

export default UserFeedPage;