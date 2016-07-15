import React from 'react';

class SignupButton extends React.Component {

  render() {

    return (
      <div>
        <p>Tired of looking through shit sites for shit recipes? Join the Heirloom family.</p>
        <a className="waves-effect waves-light btn" 
           onClick={ () => this.props.renderNewPage('SignupPage') }>
           Join
        </a>
      </div>
    );
  }
}

export default SignupButton;