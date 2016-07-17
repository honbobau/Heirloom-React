import React from 'react';

class SearchRecipesForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { query: '' }
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
    let query = e.target.value
    this.setState({ query: query })
  }

  // makes ajax call to filter through the recipes
  // filterRecipes = (query) => {
  //   let query = this.state.query

  //   fetch(`http://localhost:3000/recipes/${:id}/${:query}`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept'      : 'application/json',
  //       'Content-Type': 'application/json' 
  //     }
  //   })    
  //   .then((recipes) => recipes.json())

  // }

}

export default SearchRecipesForm;
