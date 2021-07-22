import React from 'react';
// import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Input } from 'semantic-ui-react';

import './styles.scss';

const Printemps = () => (
<section className="printemps">
    <h1 className="page-title">Recettes de Printemps</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="printemps-navBar">
      <a className="clicked" href="">Recette de printemps</a>
      <a className="nav-link" href="">Recette d'été</a>
      <a className="nav-link" href="">Recette d'automne</a>
      <a className="nav-link" href="">Recette d'hiver</a>
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher...'/>
      </form>
    </nav>
    <div className="printemps-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="printemps-card">
        <h3 className="printemps-title">Recette de Printemps 1</h3>
        <p></p>
        <img className="printemps-img" src="https://previews.123rf.com/images/svariophoto/svariophoto1409/svariophoto140900135/32083185-p-tes-aux-tomates-fra-ches-et-basilic.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="printemps-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="printemps-card">
        <h3 className="printemps-title">Recette de Printemps 2</h3>
        <img className="printemps-img" src="https://previews.123rf.com/images/svariophoto/svariophoto1409/svariophoto140900135/32083185-p-tes-aux-tomates-fra-ches-et-basilic.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="printemps-read-more" href="">En savoir plus</a>
      </article>
      <article className="printemps-card">
        <h3 className="printemps-title">Recette de Printemps 3</h3>

        <img className="printemps-img" src="https://previews.123rf.com/images/svariophoto/svariophoto1409/svariophoto140900135/32083185-p-tes-aux-tomates-fra-ches-et-basilic.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="printemps-read-more" href="">En savoir plus</a>
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

export default Printemps;
