import React from 'react';

class FavButton extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     clicked: false
   };
 }

 render() {
   const favRecipe = this.props.favRecipe;
   const icon = 'fa fa-heart';
   let className = this.state.clicked ? icon + ' active' : icon + ' inactive';

   return(
     <span className='icon is-large'>
       <i className={className} onClick={ () => favRecipe(this.activeIcon()) }></i>
     </span>
   );
 }

 activeIcon = () => {
   this.setState({
     clicked: true
   });
 };
}

export default FavButton;