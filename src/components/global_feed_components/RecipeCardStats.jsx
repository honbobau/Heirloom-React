import React from 'react';

class RecipeCardStats extends React.Component {

  render() {
    const inlineBlock = {
      display: 'inline-block'
    };

    return(
      <div className='recipe-card-info'>
        <div style={inlineBlock}>
          <span className='icon is-medium'>
            <i className='fa fa-fire'></i>
          </span>
          <span className='match-md-icon'>
            : {this.props.ingredientsQty}
          </span>
        </div>

        <div id='border-left' style={inlineBlock}>
          <span className='icon is-medium'>
            <i className='fa fa-apple'></i>
          </span>
          <span className='match-md-icon'>
            : {this.props.instructionsQty}
          </span>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }

}

export default RecipeCardStats;
