import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';
import PhotoCard from '../utility_components/PhotoCard.jsx';

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      userInfo: {},
      recipes: []
    }
  }

  componentDidMount() { 
    this.fetchUserComponents() 
  }

  render() {
    const renderNewPage = this.props.renderNewPage;
    let { recipes } = this.state;
    
    return(
      <div className='container'>
        <div className='profile-page columns'>

          <div className='profile-content column is-3'> 
            <ProfileHeader 
              userInfo={ this.state.userInfo } 
              renderNewPage={ this.props.renderNewPage }
            />

            <section className='profile-page-user-info'>
              <img src={ this.state.userInfo.user_photo } className='user-photo'/>
              <p>{ this.state.userInfo.username }</p>
              <p>{ this.state.userInfo.blurb }</p>
            </section>

            <section>
              <div className='photo-container'>

                {recipes.map(recipe => <PhotoCard 
                                        recipe={recipe} 
                                        renderNewPage={renderNewPage}
                                       />
                )}
              </div>
            </section>
          </div>

        </div>
      </div>
    );
  }

  // fetches user components
  fetchUserComponents = () => {
    const current_id = window.localStorage.current_id
    const token = window.localStorage.token

    fetch(`http://localhost:3000/user/${current_id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((user) => user.json())
    .then((user) => this.setUserInState(user) )
    .then((user) => this.fetchRecipeComponents() )
  }

  fetchRecipeComponents = () => {
    const current_id = window.localStorage.current_id
    const token = window.localStorage.token

    fetch(`http://localhost:3000/user/${current_id}/recipes?token=${token}`,{
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((recipes) => recipes.json())
    .then((recipes) => this.setRecipeInState(recipes))
  }

  setUserInState = (user) => { this.setState({ userInfo: user }) }
  setRecipeInState = (recipes) => { this.setState({ recipes: recipes}) }
}

export default ProfilePage;