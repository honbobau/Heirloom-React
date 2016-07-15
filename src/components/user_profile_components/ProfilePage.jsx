import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';

let token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiaG9uIiwicGFzc3dvcmQiOiJob24iLCJlbWFpbCI6bnVsbCwiYmx1cmIiOm51bGwsInVzZXJfcGhvdG8iOm51bGwsImlhdCI6MTQ2ODUzNjExMSwiZXhwIjoxNDY4NjIyNTExfQ.ZOWVVuRvibE1wwzA8uTgFJuVOjUXvrNVfjvod3IR-HA'

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    this.fetchUserComponents()
  }

  render() {
    return(
      <div>
        
      </div>
    );
  }

  fetchUserComponents = () => {
    fetch('http://localhost:3000/user/60' + token, {
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
      user: user
    })
  }

}

export default ProfilePage;