import React from "react";
// import PropTypes from 'prop-types';

import "./styles.scss";

const Recette = () => (
  <section className="recette">
    <h1 className="page-title"></h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="recettes-navBar">
      <a className="clicked" href="">
        Accueil des Recettes
      </a>
      <a className="nav-link" href="">
        Recette de printemps
      </a>
      <a className="nav-link" href="">
        Recette d'été
      </a>
      <a className="nav-link" href="">
        Recette d'automne
      </a>
      <a className="nav-link" href="">
        Recette d'hiver
      </a>
      <form action="POST">
        <input
          type='text'
          placeholder="Rechercher par produit..."
        />
      </form>
    </nav>

    <div className="recette-article">
      <article>
        <h1 className="recette-title">Recette vue principale</h1>
        <img className="recette-img" src="" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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

export default Recette;
