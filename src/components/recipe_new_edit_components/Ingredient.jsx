import React from 'react';

// const Ingredient = (props) => {
//   const ic = props.ic

//   return(
//     <div>
//       <label htmlFor={'ingredient' + ic}></label>
//       <input type="text" ref={'ingredient' + ic} />
//     </div> 
//   ); 
// }

class Ingredient extends React.Component {
  render() {
    const ic = this.props.ic

    return(
      <div key={'key' + ic}>
        <label htmlFor={'ingredient' + ic}></label>
        <input type="text" ref={'ingredient' + ic} />
      </div> 
    ); 
  }
}

export default Ingredient;
