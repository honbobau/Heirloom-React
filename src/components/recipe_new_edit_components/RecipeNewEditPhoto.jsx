import React from 'react';

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
        <input type="file" />

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


