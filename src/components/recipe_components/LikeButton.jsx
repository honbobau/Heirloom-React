import React from 'react';

class LikeButton extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     clicked: false
   };
 }

 render() {
   const likeRecipe = this.props.likeRecipe;
   const icon = 'fa fa-thumbs-up';
   let className = this.state.clicked ? icon + ' active' : icon + ' inactive';

   return(
     <span className='icon is-large'>
       <i className={className} onClick={ () => likeRecipe(this.activeIcon()) }></i>
     </span>
   );
 }

 activeIcon = () => {
   this.setState({
     clicked: true
   });
 };
}

export default LikeButton;