import React from 'react';

export default ({ followUser }) => (
  <span className='icon is-medium'>
    <i className='fa fa-user-plus' onClick={ () => followUser() }></i>
  </span>
);