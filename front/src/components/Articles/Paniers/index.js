import React from 'react';
import NavBarre from '../NavBarre';
// import PropTypes from 'prop-types';


import './styles.scss';

const Paniers = () => (
  <section className="paniers">
    <h1 className="page-title">Paniers</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <NavBarre />
    <div className="paniers-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="paniers-card">
        <h3 className="paniers-title">Panier de la semaine 19/07 </h3>
        <img className="paniers-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="paniers-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="paniers-card">
        <h3 className="paniers-title">Panier de la semaine 19/07 </h3>
        <img className="paniers-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="paniers-read-more" href="">En savoir plus</a>
      </article>
      <article className="paniers-card">
        <h3 className="paniers-title">Panier de la semaine 19/07 </h3>
        <img className="paniers-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="paniers-read-more" href="">En savoir plus</a>
      </article>
      <article className="paniers-card">
        <h3 className="paniers-title">Panier de la semaine 19/07 </h3>
        <img className="paniers-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="paniers-read-more" href="">En savoir plus</a>
      </article>
      <article className="paniers-card">
        <h3 className="paniers-title">Panier de la semaine 19/07 </h3>
        <img className="paniers-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        <a className="paniers-read-more" href="">En savoir plus</a>
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

export default Paniers;
