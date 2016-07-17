import React from 'react';

export default ({renderNewPage}) => (
  <span className='icon is-medium'>
    <i className='fa fa-reply' onClick={ () => renderNewPage('UserFeedPage') }></i>
  </span>
);