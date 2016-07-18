import React from 'react';

const token = '?token=' + window.localStorage.token;

class Logout extends React.Component {

  render() {
    let renderNewPage = this.props.renderNewPage
    return(
      <span className='icon is-large'>
        <i className='fa fa-sign-out' onClick={ () => this.removeToken(renderNewPage('LandingPage')) }></i>
      </span>
    );
  }

  // removes the current token and redirects to landing page
  removeToken = (callback) => {
    window.localStorage.clear()
    callback
  }

}

export default Logout;