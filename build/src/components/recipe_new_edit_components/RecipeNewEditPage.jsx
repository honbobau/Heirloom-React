import React from 'react';
import RecipeForm from './RecipeForm.jsx';
import Header from './Header.jsx';

class RecipeNewEditPage extends React.Component {

  render() {
    const renderNewPage = this.props.renderNewPage;

    return(
      <section className="container">
        <div className="columns new-recipe-page">

          <section className="column is-3 new-recipe-content">
            <Header renderNewPage={renderNewPage} />
            <RecipeForm renderNewPage={renderNewPage}/>
          </section>

        </div>
      </section>
    );
  }
}

export default RecipeNewEditPage;
