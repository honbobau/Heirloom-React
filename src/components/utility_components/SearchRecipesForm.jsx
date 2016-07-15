import React from 'react';

class SearchRecipesForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tag: ''
    }
  }

  render() {
    return( 
      <form>
        <input type='text' onBlur={} />
        <span className='icon is-small'>
          <i className='fa fa-search' onClick={}></i>
        </span>
      </form>
    );
  }


  // filters through 
  filterRecipes = (query) => {

  }

}

export default SearchRecipesForm;
