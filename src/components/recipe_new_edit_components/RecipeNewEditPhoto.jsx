import React from 'react';

class RecipeNewEditPhoto extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'RecipeNewEditPhoto';
  }

  render() {
    return(
      <div>
        <h1>Enter Photo</h1>
        <input type="file" />
        <button onClick={ this.props.submitForm }>Submit</button>
      </div>
    );
  }
}

export default RecipeNewEditPhoto;
