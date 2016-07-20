import React from 'react';
const ReactS3Uploader = require('react-s3-uploader');

class RecipeNewEditPhoto extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      description: '',
      photoURL: ''
    }
  }

  // renders
  render() {

    return(
      <div>
        <h2 id="photo-header">ADD PHOTO & DESCRIPTION</h2>
        <div>
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
        </div>
          <p className="control" id="control-description">
            <textarea 
              className="textarea"
              placeholder="Add Description"
              type="text"
              onChange={ this.updateDescriptionState.bind(this) }
              onBlur={ this.updateDescriptionState.bind(this) }
          />
          </p>
        <button className='button is-success' onClick={ this.props.previousStep}>Previous</button>
        <button className='button is-success' onClick={ (e) => { this.updateParentState() } }>Submit</button>
      </div>
    );
  }

 // updates photo state
  updatePhotoState = (data) => {
    this.setState({ photoURL: data })
  }

  // updates description state
  updateDescriptionState = (e) => {
    let data = e.target.value
    let description = this.state.description

    this.setState({ description: data })
    this.props.saveDescription(this.state.description)
  }



  // updates parent state 
  updateParentState = () => {
    this.props.savePhoto(this.state.photo)
    this.props.submitForm()
  }

  // returns signedURL after successful upload
  onUploadFinish = (url) => {
    let setURL = 'https://s3-us-west-2.amazonaws.com/heirloom-toronto/' + url.filename
    this.props.savePhoto(setURL)
  }

}

export default RecipeNewEditPhoto;