import React from 'react';
// import PropTypes from 'prop-types';


import './styles.scss';

const Nutrition = () => (
  <div>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="navBar">
      <a className="nav-link" href="">Paniers de produits</a>
      <a className="nav-link" href="">Evenements</a>
      <a className="nav-link" href="">Annonces</a>
      <a className="clicked" href="">Nutrition</a>
      <form action="POST">
      <input type='text' placeholder='Rechercher...'/>
      </form>
    </nav>
  </div>
);

export default Nutrition;
