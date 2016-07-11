import React from 'react';
import RecipeCard from '../utility_components/RecipeCard.jsx'

class UserFeedRecipes extends React.Component {

  render() {
    // let following_ids = SELECT following_id FROM follows WHERE this.props.user_id = user_id
    // let followsRecipes = SELECT * FROM recipes WHERE following_ids = user_id
    // const listRecipes = this.state.data.map(recipe => <RecipeCard ingredients={ recipe.ingredients } tags={ recipe.tags } instructions={ recipe.instructions photo={ recipe.recipe_photo }/>)

    return(
      <div>
        <RecipeCard />
        {/* listRecipes */}
      </div>
    );
  }

}

export default UserFeedRecipes;