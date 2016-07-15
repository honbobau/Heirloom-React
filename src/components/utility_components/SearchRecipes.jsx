import React from 'react';

export default ({displayRecipeSearch}) => (
  <span className='icon is-large'>
    <i className='fa fa-search' onClick={ () => displayRecipeSearch()}></i>
  </span>
);

