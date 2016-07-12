import React from 'react';
import RecipeNewEditIngredients from './RecipeNewEditIngredients.jsx';

class RecipeNewEditPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="container new-recipe">
        <div className="row">

          <section className="col-sm-5 col-sm-offset-3">
            <h4>New Recipe</h4> 
            <RecipeNewEditIngredients />
          </section>

        </div>
      </section>
    );
  }
}

export default RecipeNewEditPage;