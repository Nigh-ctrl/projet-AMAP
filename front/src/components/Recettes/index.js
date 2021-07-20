import React from 'react';
// import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Input } from 'semantic-ui-react';

import './styles.scss';

const Recettes = () => (
  <section className="recettes">
    <h1 className="page-title">Recettes</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="recettes-navBar">
      <a className="clicked" href="">Recette de printemps</a>
      <a className="nav-link" href="">Recette d'été</a>
      <a className="nav-link" href="">Recette d'automne</a>
      <a className="nav-link" href="">Recette d'hiver</a>
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher par produit...'/>
      </form>
    </nav>
    <div className="recettes-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="recettes-card">
        <h3 className="recettes-title">Recette 1 </h3>
        <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="recettes-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="recettes-card">
        <h3 className="recettes-title"> Recette 2</h3>
        <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="recettes-read-more" href="">En savoir plus</a>
      </article>
      <article className="recettes-card">
        <h3 className="recettes-title">Recette 3 </h3>
        <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="recettes-read-more" href="">En savoir plus</a>
      </article>
      <article className="recettes-card">
        <h3 className="recettes-title">Recette 4 </h3>
        <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="recettes-read-more" href="">En savoir plus</a>
      </article>
      <article className="recettes-card">
        <h3 className="recettes-title">Recettes 5</h3>
        <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="recettes-read-more" href="">En savoir plus</a>
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

export default Recettes;
