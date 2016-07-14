import React from 'react';

class DescriptionTags extends React.Component {
  
  render() {
    const description = this.props.description

    return(
      <p>{description}</p>
    );
  }
}

export default DescriptionTags;