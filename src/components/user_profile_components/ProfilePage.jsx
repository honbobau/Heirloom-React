import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';
import PhotoCard from '../utility_components/PhotoCard.jsx';
import ProfileTabPhotos from '../utility_components/ProfileTabPhotos.jsx';

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      userInfo: {},
      userRecipes: [],
      favRecipes: []
    }
  }

  componentDidMount() { 
    this.fetchUserComponents() 
  }

  render() {
    const renderNewPage = this.props.renderNewPage;
    let { userRecipes } = this.state;
    
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

            <section className='profile-recipe-container'>
              <div className='profile-photo-container'>
                {userRecipes.map(recipe => <PhotoCard 
                                        recipe={recipe} 
                                        renderNewPage={renderNewPage}
                                       />
                )}
              </div>
            </section>

            <section>
              <ProfileTabPhotos />
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
    .then((user) => this.setUserInState(user))
    .then((user) => this.fetchRecipeComponents())
    .then((user) => this.fetchFavouriteRecipes())
  }

  // fetches recipes owned by user
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
    .then((userRecipes) => userRecipes.json())
    .then((userRecipes) => this.setUserRecipes(userRecipes))
  }

  // fetches favourited by user
  fetchFavouriteRecipes = () => {
    const current_id = window.localStorage.current_id
    const token = window.localStorage.token

    fetch(`http://localhost:3000/user/${current_id}/favourites?token=${token}`, {
      method: 'GET',
      header: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((favRecipes) => favRecipes.json())
    .then((favRecipes) => console.log(favRecipes))
    .then((favRecipes) => this.setFavRecipes(favRecipes))
    .catch((res) => console.log(res))
  }

  // sets user info into state
  setUserInState = (user) => { this.setState({ userInfo: user }) }

  // sets user recipes into state
  setUserRecipes = (userRecipes) => { this.setState({ userRecipes: userRecipes}) }

  // sets favourite recipes into state
  setFavRecipes = (favRecipes) => { this.setState({ favRecipes: favRecipes}) }
}

export default ProfilePage;