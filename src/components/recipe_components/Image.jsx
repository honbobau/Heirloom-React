import React from 'react';

class Image extends React.Component {

  render() {
    const imageURL = this.props.imageURL

    return(
      <img src={imageURL} />
    ); 
  }
}

export default Image;
