import React, { useState, useEffect }from "react";
// import PropTypes from 'prop-types';
// on a besoin d'importer useParams pour avoir accés au slug de l'url
import { useParams } from "react-router";
import axios from 'axios';

import "./styles.scss";

const Recette = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [recetteId, setRecetteId] = useState(id);
  const [recette, setRecette] = useState([]);

  const getOneRecipe = () => (
    //requete axios
    axios({
      method: 'get',
      url: `http://localhost:5000/recettes/${recetteId}`
    })
    .then((res) => {
      setRecette(res.data);
      console.log(res.data);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )

  useEffect(getOneRecipe, []);

  return(
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
          <h1 className="recette-title">{recette.title}</h1>
          <img className="recette-img" src="" alt=""/>
          //// besoin de fix le rendu de la liste d'ingrédient on reçoit un seul string
          <p>{recette.ingredients}</p>
          <p>{recette.description}</p>
        </article>
      </div>
    </section>
  )
};

// Content.propTypes = {
//
// };

// Content.defaultProps = {
//
// };

export default Recette;
