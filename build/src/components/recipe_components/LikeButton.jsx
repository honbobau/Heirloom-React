import React from 'react';

export default ({ likeRecipe }) => (
  <span className='icon is-large'>
    <i className='fa fa-thumbs-up' onClick={ likeRecipe }></i>
  </span>
);
