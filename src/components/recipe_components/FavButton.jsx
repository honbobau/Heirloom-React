import React from 'react';

export default ({ favRecipe }) => (
  <span className='icon is-medium'>
    <i className='fa fa-heart' onClick={ favRecipe }></i>
  </span>
);