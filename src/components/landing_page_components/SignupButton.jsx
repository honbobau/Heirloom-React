import React from 'react';

class SignupButton extends React.Component {

  render() {

    return (
      <button className="button"
         onClick={ () => this.props.renderNewPage('SignupPage') }>
         Join
      </button>
    );
  }
}

export default SignupButton;
