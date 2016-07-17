import React from 'react';
import RecipeForm from './RecipeForm.jsx'

class RecipeNewEditPage extends React.Component {

  render() {
    return(
      <section className="container new-recipe">
        <div className="columns">

          <section className="column is-3">
            <h4>New Recipe</h4> 
            <RecipeForm renderNewPage={this.props.renderNewPage}/>
          </section>

        </div>
      </section>
    );
  }
}

export default RecipeNewEditPage;