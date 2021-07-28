import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const Automne = () => (
<section className="automne">
    <h1 className="page-title">Recettes d'automne</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="automne-navBar">
      
      
      <a className="nav-link" href="">Recette de printemps</a>
      <a className="nav-link" href="">Recette d'été</a>
      <a className="clicked" href="">Recette d'automne</a>
      <a className="nav-link" href="">Recette d'hiver</a>

      
      
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher...'/>
      </form>
    </nav>
    <div className="automne-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="automne-card">
        <h3 className="automne-title">Recette d'automne 1</h3>
        <p></p>
        <img className="automne-img" src="https://previews.123rf.com/images/lenyvavsha/lenyvavsha1602/lenyvavsha160200204/52%C3%A6326607-curry-citrouille-aux-poivrons-et-tomates-sur-un-gros-plan-de-plaque-sur-la-table-horizontal.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="automne-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="automne-card">
        <h3 className="automne-title">Recette d'automne 2</h3>
        <img className="automne-img" src="https://previews.123rf.com/images/lenyvavsha/lenyvavsha1602/lenyvavsha160200204/52%C3%A6326607-curry-citrouille-aux-poivrons-et-tomates-sur-un-gros-plan-de-plaque-sur-la-table-horizontal.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="automne-read-more" href="">En savoir plus</a>
      </article>
      <article className="automne-card">
        <h3 className="automne-title">Recette d'automne 3</h3>
        <img className="automne-img" src="https://previews.123rf.com/images/lenyvavsha/lenyvavsha1602/lenyvavsha160200204/52%C3%A6326607-curry-citrouille-aux-poivrons-et-tomates-sur-un-gros-plan-de-plaque-sur-la-table-horizontal.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="automne-read-more" href="">En savoir plus</a>
      </article>
    </div>
  </section>
);


// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Automne;
