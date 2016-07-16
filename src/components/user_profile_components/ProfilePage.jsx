import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';

const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsInVzZXJuYW1lIjoiSGFtYnVyZ2VybWFuIiwicGFzc3dvcmQiOiIkMmEkMTAkd3lJVG5tdEVyMjBHZHRZZ0xBZDc5TzhKSnJqMTBzRFFlNUlmUWpOT3RJS0Q0MnlVR2trdXEiLCJlbWFpbCI6IjEyMzQ1NkAxMjM0NTYuMTIzNDU2IiwiYmx1cmIiOiJJIGFtIGEgaGFtYnVyZ2VyLiIsInVzZXJfcGhvdG8iOiJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2hlaXJsb29tLXRvcm9udG8vNjY1MWZhYTctN2ViYy00YWVkLWI2Y2YtNDQyOWIxZGYyNTk2X3VzZXIxLnBuZyIsImlhdCI6MTQ2ODYxNTk5OCwiZXhwIjoxNDY4NzAyMzk4fQ.JsGjIFFhxlvjuAxAQRIQvq_UF1LwP0iLbRfp5XbgcXI'

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