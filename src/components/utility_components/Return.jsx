import React from 'react';

class Return extends React.Component {

  constructor(props) {
    super(props);

    this.state = { page: window.localStorage.prevPage }
  };

  render() {
    const renderNewPage = this.props.renderNewPage;

    return(
      <span className='icon is-large'>
        <i className='fa fa-reply' onClick={ () => renderNewPage(this.state.page) }></i>
      </span>
    );
  }

}

export default Return;