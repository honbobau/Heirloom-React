import React from 'react';
import ProfileHeader from './ProfileHeader.jsx';
import PhotoCard from '../utility_components/PhotoCard.jsx';
import RecipeGallery from './RecipeGallery.jsx';
import RecipeGalleryNav from './RecipeGalleryNav.jsx';

class ProfilePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      userInfo: {},
      userRecipes: [],
      favRecipes: [],
      recipeDisplay: 'user'
    }
  }

  componentDidMount() { this.fetchUserComponents() }

  render() {
    // this looks so gross
    const renderNewPage = this.props.renderNewPage;
    let userInfo = this.state.userInfo
    let { userRecipes } = this.state;
    let { favRecipes }  = this.state;
    let displayUserRecipes = <RecipeGallery 
                              recipes={userRecipes}
                              renderNewPage={renderNewPage}
                             />;
    let displayFavRecipes = <RecipeGallery 
                              recipes={favRecipes}
                              renderNewPage={renderNewPage}
                            />;
    let recipeGallery;

    this.state.recipeDisplay === 'user' ? recipeGallery = displayUserRecipes : recipeGallery = displayFavRecipes;

    return(
      <div className='container'>
        <div className='profile-page columns'>

          <div className='profile-content column is-3'> 
            <ProfileHeader 
              userInfo={ userInfo } 
              renderNewPage={ this.props.renderNewPage }
            />

            <section className='profile-page-user-info'>
              <img src={ userInfo.user_photo } className='user-photo'/>
              <p>{ userInfo.username }</p>
              <p>{ userInfo.blurb }</p>
            </section>

            <section className='profile-recipe-container'>
              <RecipeGalleryNav toggleGallery={this.toggleGallery}/>
              { recipeGallery }
            </section>

          </div>

        </div>
      </div>
    );
  }

  // fetches user components
  fetchUserComponents = () => {
    const current_id = window.localStorage.current_id;
    const token      = window.localStorage.token;
    
    fetch(`http://localhost:3000/user/${current_id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((user) => user.json())
    .then((user) => this.setUserInState(user))
    .then((user) => Promise.all(this.fetchRecipeComponents()))
    .then((user) => this.fetchFavouriteRecipes())
    .catch((res) => console.log(res))
  }

  // fetches recipes owned by user
  fetchRecipeComponents = () => {
    const current_id = window.localStorage.current_id;
    const token      = window.localStorage.token;

    fetch(`http://localhost:3000/user/${current_id}/recipes?token=${token}`,{
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((userRecipes) => userRecipes.json())
    .then((userRecipes) => this.setUserRecipes(userRecipes))
    .catch((res) => console.log(res))
  }

  // fetches favourited by user
  fetchFavouriteRecipes = () => {
    const current_id = window.localStorage.current_id;
    const token      = window.localStorage.token;

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

  // toggles the gallery showing state
  toggleGallery = (state) => {
    this.setState({
      recipeDisplay: state
    })
  }

}

export default ProfilePage;