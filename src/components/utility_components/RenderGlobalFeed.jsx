import React from 'react';

export default ({renderNewPage}) => (
  <span className='icon is-large'>
    <i className='fa fa-globe' onClick={ () => renderNewPage('GlobalFeedPage')}></i>
  </span>
);
