import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

import './styles.scss';

const Nutrition = () => (
  <div>
    <nav className="navBar">
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles">Accueil</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/paniers">Paniers de produits</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/evenements">Evenements</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/annonces">Annonces</NavLink>
      <NavLink activeClassName="clicked" className="nav-link" exact to="/articles/nutrition">Nutrition</NavLink>
      <form action="post">
      <input type='text' placeholder='Rechercher...'/>
      </form>
    </nav>
  </div>
);

export default Nutrition;
