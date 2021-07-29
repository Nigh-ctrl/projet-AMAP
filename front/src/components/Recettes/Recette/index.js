import React, { useState, useEffect }from "react";
// on a besoin d'importer useParams pour avoir accés au slug de l'url
import { useParams } from "react-router";
import axios from 'axios';
import NavBar from '../NavBar';
import EditButton from '../../EditButton';

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
      url: `${axios.default.baseURL}/recettes/${recetteId}`
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
      <h1 className="page-title">{recette.title}</h1>
      <NavBar />
        <article className="recette-article">
      <EditButton />
          <div className="recette-container">
          {/*besoin de fix le rendu de la liste d'ingrédient on reçoit un seul string*/}
            <p className="recette-container-ingredient">{recette.ingredients}</p>
            <p className="recette-container-description">{recette.description}</p>
          </div>
          <img className="recette-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
        </article>
    </section>
  )
};


export default Recette;
