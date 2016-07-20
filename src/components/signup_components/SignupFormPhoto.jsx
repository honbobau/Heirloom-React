import React from 'react';
import ReactDOM from 'react-dom';
const ReactS3Uploader = require('react-s3-uploader');

class SignupFormPhoto extends React.Component {

  render() {
    return(

      <form id="signup-form-photo" encType="application/x-www-form-urlencoded">
        <h2 className="signup-header">ADD PHOTO & BIO</h2>
        <label htmlFor="signup-photo"></label>
        <ReactS3Uploader
          signingUrl="/s3/sign"
          accept="image/*"
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
          contentDisposition="auto"
          server="http://localhost:3000" 
        />
    
        <p className="control" id="control-blurb">
          <textarea placeholder="Tell Us About Yourself" className="input" type="text" ref="blurb" onBlur={ this.saveBlurb }/>
        </p>
    
        <button className="button is-success" onClick={ this.previousForm }>Previous</button>
        <button className="button is-success" onClick={ this.saveAndFinish }>Finish</button>
      </form>
    );
  }

  previousForm = (ev) => {
    ev.preventDefault();

    this.props.previousStep()
  }

  saveBlurb = () => {
    let blurb =  ReactDOM.findDOMNode(this.refs.blurb).value
    
    this.props.saveBlurb(blurb)
  }

  saveAndFinish = (ev) => {
    ev.preventDefault();

    this.props.submitForm(this.props.nextStep)
  }

  onUploadFinish = (url) => { 
    let setURL = 'https://s3-us-west-2.amazonaws.com/heirloom-toronto/' + url.filename 
    this.props.savePhotoURL(setURL)
  }
}

export default SignupFormPhoto;