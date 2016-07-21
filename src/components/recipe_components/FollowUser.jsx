import React from 'react';

class FollowUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  render() {
    const followUser = this.props.followUser;
    const icon = 'fa fa-user-plus';
    let className = this.state.clicked ? icon + ' active' : icon + ' inactive';

    return(
      <span className='icon is-large'>
        <i className={className} onClick={ () => followUser(this.activeIcon())}></i>
      </span>
    );
  }

  activeIcon = () => {
    this.setState({
      clicked: true
    });
  };
}

export default FollowUser;
