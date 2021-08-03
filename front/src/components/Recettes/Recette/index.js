import React, { useState, useEffect }from "react";
// on a besoin d'importer useParams pour avoir accés au slug de l'url
import { useParams } from "react-router";
import axios from 'axios';
import NavBar from '../NavBar';
import EditButton from '../../EditButton';

// import des photos des recettes
import potofu from '../../../../public/recettes/potofu.jpeg';
import poivrons from '../../../../public/recettes/poivrons-farcis.jpeg';
import salade from '../../../../public/recettes/salade-fraicheur.jpeg';
import veloute from '../../../../public/recettes/veloute.jpeg';
import gaufres from '../../../../public/recettes/gaufres.jpeg';

import "./styles.scss";

const Recette = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [recetteId, setRecetteId] = useState(id);
  const [recette, setRecette] = useState([]);
  const [recetteIngredients, setRecetteIgredients] = useState([]);

  const getOneRecipe = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/recettes/${recetteId}`
    })
    .then((res) => {
      setRecetteIgredients(res.data.ingredients.split(','));
      setRecette(res.data);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
    )
    
  useEffect(getOneRecipe, []);

  let imagePath;
  switch (recette.id){
    case 1:
      imagePath = salade;
    break;
    case 2:
      imagePath = potofu;
    break;
    case 3:
      imagePath = poivrons;
    break;
    case 4:
      imagePath = veloute;
    break;
    case 5:
      imagePath = gaufres;
    break;
  }

  return(
    <section className="recette">
      <h1 className="page-title">{recette.title}</h1>
      <NavBar />
        <article className="recette-article">
      <EditButton />
          <div className="recette-container">
          {/*besoin de fix le rendu de la liste d'ingrédient on reçoit un seul string*/}
            <ul className="recette-container-ingredient">
              {
                recetteIngredients.map(row => (
                  <li key={row}>{row}</li>
                ))
              }
            </ul>
            <p className="recette-container-description">{recette.description}</p>
          </div>
          <img className="recette-img" src={imagePath} alt=""/>
        </article>
    </section>
  )
};


export default Recette;
