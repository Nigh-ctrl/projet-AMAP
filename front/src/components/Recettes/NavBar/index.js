import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <div>
    <nav className="navBar">
      <NavLink activeClassName="clicked" className="nav-link" exact to="/recettes">Accueil des Recettes</NavLink>
      <NavLink activeClassName="clicked"  className="nav-link" exact to="/recettes/saison/1">Recette d'Eté</NavLink>
      <NavLink activeClassName="clicked"  className="nav-link" exact to="/recettes/saison/2">Recette de Printemps</NavLink>
      <NavLink activeClassName="clicked"  className="nav-link" exact to="/recettes/saison/3">Recette d'Hiver</NavLink>
      <NavLink activeClassName="clicked"  className="nav-link" exact to="/recettes/saison/4">Recette d'Automne</NavLink>
    </nav>
  </div>
);

export default NavBar;
