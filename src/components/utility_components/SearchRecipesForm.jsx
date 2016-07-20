import React from 'react';

const token = '?token=' + window.localStorage.token;

class SearchRecipesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  render() {
    return(
      <form className='recipe-search-form-container'>
        <div className='recipe-search-form-package'>
          <input className='recipe-search-form-input' type='text' onBlur={this.storeQuery} />
          <span className='recipe-search-form-icon icon is-small'>
            <i className='recipe-search-form-icon fa fa-search' onClick={this.filterRecipes}></i>
          </span>
        </div>
      </form>
    );
  }

  // stores query in state
  storeQuery = (e) => {
    let query = e.target.value;
    this.setState({ query: query });
  }

  // makes ajax call to filter through the recipes
  filterRecipes = () => {
    let query = this.state.query;

    fetch(`https://heirloom-api.herokuapp.com/recipes/search/${query}${token}`, {
      method: 'GET',
      headers: {
        'Accept'      : 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((filteredRecipes) => filteredRecipes.json())
    .then((filteredRecipes) => this.props.setRecipesInState(filteredRecipes))
    .catch((filteredRecipes) => console.log(filteredRecipes));
  }

}

export default SearchRecipesForm;
