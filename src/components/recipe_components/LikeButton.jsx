import React from 'react';

export default ({ likeRecipe }) => (
  <div onClick={ likeRecipe }>
    Like Recipe
  </div>
  <span className='icon is-medium'>
    <i className='fa fa-thumbs-up' onClick={ likeRecipe }></i>
  </span>
);