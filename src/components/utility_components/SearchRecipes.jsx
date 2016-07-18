import React from 'react';
import SearchRecipesForm from './SearchRecipesForm.jsx';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class SearchRecipes extends React.Component {

  render() {
    return(
      <div className='recipe-search-form'>
        <Dropdown>

          <DropdownTrigger>
            <span className='icon is-large'>
              <i className='fa fa-search' id='search-icon'></i>
            </span>
          </DropdownTrigger>

          <DropdownContent>
            <SearchRecipesForm setRecipesInState={this.props.setRecipesInState}
            />
          </DropdownContent>

        </Dropdown>
      </div>
    );
  }

}

export default SearchRecipes;
