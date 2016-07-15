import React from 'react';
import SearchRecipesForm from './SearchRecipesForm.jsx'

export default ({displayRecipeSearch}) => (
  <span className='icon is-large'>
    <i className='fa fa-search' onClick={ () => displayRecipeSearch()}></i>
  </span>
);

