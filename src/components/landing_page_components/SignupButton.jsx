import React from 'react';

class SignupButton extends React.Component {

  render() {

    return (
      <div>
        <p>Tired of looking through shit sites for shit recipes? Join the Heirloom family.</p>
        <button className="waves-effect waves-light button" 
           onClick={ () => this.props.renderNewPage('SignupPage') }>
           Join
        </button>
      </div>
    );
  }
}

export default SignupButton;