import React from 'react';
const ReactS3Uploader = require('react-s3-uploader');

class RecipeNewEditPhoto extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      description: '',
      photo: []
    }
  }

  // renders
  render() {

    return(
      <div>
        <label>Input Photo</label>
        <ReactS3Uploader
          signingUrl="/s3/sign"
          accept="image/*"
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          // signingUrlHeaders={{ additional: headers }}
          // signingUrlQueryParams={{ additional: query-params }}
          uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
          contentDisposition="auto"
          server="http://localhost:3000" 
        />

        <label>Input Description</label>
        <input 
          type="text"
          onChange={ this.updateDescriptionState.bind(this) }/>

        <button onClick={ this.props.previousStep}>Previous</button>
        <button onClick={ (e) => { this.updateParentState() } }>Submit</button>
      </div>
    );
  }

 // updates photo state
  updatePhotoState = (data) => {
    let photo = this.state.photo

    this.setState({
      // photo
    })

  }

  // updates description state
  updateDescriptionState = (e) => {
    let data = e.target.value
    let description = this.state.description

    this.setState({
      description: data
    })
    console.log(data)
  }

  // updates parent state 
  updateParentState = () => {
    this.props.savePhoto(this.state.photo)
    this.props.saveDescription(this.state.description)
    this.props.submitForm()
  }

}

export default RecipeNewEditPhoto;


