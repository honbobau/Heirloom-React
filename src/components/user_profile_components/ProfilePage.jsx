import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      userInfo: []
    }
  }

  componentDidMount() {
    this.fetchUserComponents()
  }

  render() {

    return(
      <div>
        <div>
          <ProfileHeader 
            userInfo={this.state.userInfo} 
            renderNewPage={this.props.renderNewPage}
          />
        </div>

        <div>
          {/* recipes owned by user */}
        </div>
      </div>
    );
  }

  fetchUserComponents = () => {
    const current_id = window.localStorage.current_id
    const token = window.localStorage.token
    // const id = this.state.userInfo.id
    fetch(`http://localhost:3000/user/${current_id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((user) => user.json())
    .then((user) => this.setUserInState(user) )
  }

  setUserInState = (user) => {
    this.setState({
      userInfo: user
    })
  }

}

export default ProfilePage;