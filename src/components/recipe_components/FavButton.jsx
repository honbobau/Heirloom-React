import React from 'react';

export default ({ favRecipe }) => (
  <span className='icon is-large'>
    <i className='fa fa-heart' onClick={ favRecipe }></i>
  </span>
);