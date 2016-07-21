import React from 'react';

export default ({renderNewPage}) => (
  <span className='icon is-large'>
    <i className='fa fa-user' onClick={ () => renderNewPage('ProfilePage')}></i>
  </span>
);
