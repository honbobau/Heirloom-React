import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { userInfo: {} }
    this.state = { recipes: [] }
  }

  componentDidMount() { 
    this.fetchUserComponents() 
  }

  render() {
    
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
              <div className='recipe-container'>
              {recipes.map(recipe => <RecipeCard 
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
    .then(() => this.fetchRecipeComponents)
    .then((recipes) => recipes.json())
    .then((recipes) => this.setRecipeInState(recipe))
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
  }

  setUserInState = (user) => { this.setState({ userInfo: user }) }
  setRecipeInState = (recipes) => { this.setState({ recipes: recipes}) }
}

export default ProfilePage;