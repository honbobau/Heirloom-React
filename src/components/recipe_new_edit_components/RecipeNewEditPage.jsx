import React from 'react';
import RecipeForm from './RecipeForm.jsx'

class RecipeNewEditPage extends React.Component {

  render() {
    return(
      <section className="container new-recipe">
        <div className="row">

          <section className="col-sm-5 col-sm-offset-3">
            <h4>New Recipe</h4> 
            <RecipeForm renderNewPage={this.props.renderNewPage}/>
          </section>

        </div>
      </section>
    );
  }
}

export default RecipeNewEditPage;