import React from 'react';
// import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Input } from 'semantic-ui-react';

import './styles.scss';

const Articles = () => (
  <section className="articles">
    <h1 className="page-title">Articles</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="articles-navBar">
      <a className="clicked" href="">Paniers de produits</a>
      <a className="nav-link" href="">Evenements</a>
      <a className="nav-link" href="">Annonces</a>
      <a className="nav-link" href="">Nutrition</a>
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher par produit...'/>
      </form>
    </nav>
    <div className="articles-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="articles-card">
        <h3 className="articles-title">Panier de la semaine 19/07 </h3>
        <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="articles-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="articles-card">
        <h3 className="articles-title">Panier de la semaine 19/07 </h3>
        <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="articles-read-more" href="">En savoir plus</a>
      </article>
      <article className="articles-card">
        <h3 className="articles-title">Panier de la semaine 19/07 </h3>
        <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="articles-read-more" href="">En savoir plus</a>
      </article>
      <article className="articles-card">
        <h3 className="articles-title">Panier de la semaine 19/07 </h3>
        <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="articles-read-more" href="">En savoir plus</a>
      </article>
      <article className="articles-card">
        <h3 className="articles-title">Panier de la semaine 19/07 </h3>
        <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="articles-read-more" href="">En savoir plus</a>
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

export default Articles;
