import React from 'react';

export default ({renderNewPage}) => (
  <span className='icon is-large'>
    <i className='fa fa-plus' onClick={ () => renderNewPage('RecipeNewEditPage')}></i>
  </span>
);
