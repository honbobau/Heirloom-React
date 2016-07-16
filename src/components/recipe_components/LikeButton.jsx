import React from 'react';

export default ({ likeRecipe }) => (
  <span className='icon is-medium'>
    <i className='fa fa-thumbs-up' onClick={ likeRecipe }></i>
  </span>
);