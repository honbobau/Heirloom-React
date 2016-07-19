import React from 'react';

class Return extends React.Component {

  constructor(props) {
    super(props);

    this.state = { page: window.localStorage.prevPage }
  };


}

export default Return;




let prevPage = window.localStorage.prevPage

export default ({renderNewPage}) => (
  <span className='icon is-large'>
    <i className='fa fa-reply' onClick={ () => renderNewPage(prevPage) }></i>
  </span>
);