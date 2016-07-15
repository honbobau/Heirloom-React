import React from 'react';
import ReactDOM from 'react-dom';

class SignupFormPhoto extends React.Component {

  render() {
    return(

      <form id="signup-form-photo" encType="application/x-www-form-urlencoded">
        <label htmlFor="signup-photo">Photo</label>
        <div>
          <input type="text" ref="user_photo" />
        </div>

        <label htmlFor="signup-blurb">Blurb</label>
        <div>
          <input type="text" ref="blurb" />
        </div>

        <button onClick={ this.previousForm }>Previous</button>
        <button onClick={ this.saveAndFinish }>Finish</button>
      </form>
    );
  }

  previousForm = (ev) => {
    ev.preventDefault();

    this.props.previousStep()
  }

  saveAndFinish = (ev) => {
    ev.preventDefault();

    let data = {
      user_photo : ReactDOM.findDOMNode(this.refs.user_photo).value,
      blurb      : ReactDOM.findDOMNode(this.refs.blurb).value
    }

    this.props.saveValuesPhoto(data)
    this.props.submitForm()
  }
}

export default SignupFormPhoto;