import React from 'react';

class SignupFormConfirm extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.renderNewPage('UserFeedPage')
    }, 5000)
  }

  render() {
    let username = this.props.username

    return(
      <div>
        Welcome aboard, {username}!
      </div>
    );
  }

}

export default SignupFormConfirm;