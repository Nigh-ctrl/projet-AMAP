import React from "react";
// import PropTypes from 'prop-types';
import "semantic-ui-css/semantic.min.css";
import { Icon, Input } from "semantic-ui-react";

import "./styles.scss";

const Recette = () => (
  <section className="recette">
    <h1 className="page-title">Recettes</h1>
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
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Rechercher par produit..."
        />
      </form>
    </nav>

    <article className="recette-principale">
        <h3 className="recette-title">Recette d'hiver </h3>
        <img className="recette-img" src="https://previews.123rf.com/images/lenyvavsha/lenyvavsha1602/lenyvavsha160200204/52%C3%A6326607-curry-citrouille-aux-poivrons-et-tomates-sur-un-gros-plan-de-plaque-sur-la-table-horizontal.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        
      </article>
  </section>
);

// Content.propTypes = {
//
// };

// Content.defaultProps = {
//
// };

export default Recettes;
