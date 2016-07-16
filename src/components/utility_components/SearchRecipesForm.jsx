// import React from 'react';

// class SearchRecipesForm extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       tag: ''
//     }
//   }

//   render() {
//     return( 
//       <form>
//         <input type='text' onBlur={this.storeQuery} />
//         <span className='icon is-small'>
//           <i className='fa fa-search' onClick={this.filterRecipes}></i>
//         </span>
//       </form>
//     );
//   }

//   // stores query in state
//   storeQuery = (e) => {
//     let query = e.target.value

//     this.setState({
//       tag: query
//     })
//   }

//   // makes ajax call to filter through the recipes
//   filterRecipes = (query) => {
//     let query = this.state.query

//     fetch(`http://localhost:3000/recipes/${:id}/${:query}`, {
//       method: 'POST',
//       headers: {
//         'Accept'      : 'application/json',
//         'Content-Type': 'application/json' 
//       }
//     })    
//     .then((recipes) => recipes.json())

//   }

// }

// export default SearchRecipesForm;
