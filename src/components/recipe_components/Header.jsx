import React from 'react';
import Return from '../utility_components/Return.jsx';

export default ({renderNewPage}) => (
  <header className='recipe-header container'>
    <img src='src/images/heirloom_logo_white.png' className='heirloom-logo' />

    <div className='recipe-header-return'>
      <Return renderNewPage={renderNewPage}/>
    </div>
  </header>
);