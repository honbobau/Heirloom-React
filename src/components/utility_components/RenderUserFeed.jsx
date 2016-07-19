import React from 'react';

export default ({renderNewPage}) => (
  <span className='icon is-large'>
    <i className='fa fa-feed' onClick={ () => renderNewPage('UserFeedPage')}></i>
  </span>
);
