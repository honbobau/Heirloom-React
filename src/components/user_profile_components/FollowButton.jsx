import React from 'react';

export default ({ followUser }) => (
  <span className='icon is-large'>
     <i className="fa fa-plus" onClick={ followUser }></i>
  </span>
);