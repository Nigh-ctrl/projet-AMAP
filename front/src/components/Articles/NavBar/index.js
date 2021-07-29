import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <div>
    <nav className="navBar">
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles">Accueil</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/1">Paniers de produits</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/2">Evenements</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/3">Annonces</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/4">Nutrition</NavLink>
    </nav>
  </div>
);

export default NavBar;
