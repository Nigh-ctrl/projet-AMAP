import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import AddButton from '../AddButton'
import {ConnexionContext} from '../../ConnexionContext.js'

// import des photos des recettes
import potofu from '../../../public/recettes/potofu.jpeg';
import poivrons from '../../../public/recettes/poivrons-farcis.jpeg';
import salade from '../../../public/recettes/salade-fraicheur.jpeg';
import veloute from '../../../public/recettes/veloute.jpeg';
import gaufres from '../../../public/recettes/gaufres.jpeg';

import './styles.scss';

const Recettes = () => {
  const { saison } = useParams();

  const [recettes, setRecettes] = useState([]);

  const [token, setToken] = useContext(ConnexionContext)
  
  const getRecipes = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/recettes`
    })
    .then((res) => {
        console.log(res.data)
      if(saison === undefined){
        setRecettes(res.data);
        return
      }
      const saisonFiltre = res.data.filter(recette => (recette.season_id == saison));
      setRecettes(saisonFiltre);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )
 
  useEffect(getRecipes, [saison]);

  let imagePath;

  if(token){
    return(
    <section className="recettes">
      <h1 className="page-title">Recettes</h1>
      <NavBar />
      <AddButton />
      <div className="recettes-list">
        {
          recettes.map((recette) => {
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
            return (
              <Link className="recettes-a" key={recette.id+recette.slug} to={`/recette/${recette.id}`}>
                <article className="recettes-card">
                  <h3 className="recettes-title">{recette.title}</h3>
                  <div className="recettes-img-container">
                    <img className="recettes-img" src={imagePath} alt=""/>
                  </div>
                  <p className="recettes-description">{`${recette.description.slice(0, 300)} [...]`}</p>
                  <p className="recettes-read-more">En savoir plus</p>
                </article>
              </Link>
            )
          })
        }
      </div>
    </section>
    )
  }

  return(
    <section className="recettes">
      <h1 className="page-title">Recettes</h1>
      <NavBar />
      <div className="recettes-list">
        {
          recettes.map((recette) => {
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
            return (
              <Link className="recettes-a" key={recette.id+recette.slug} to={`/recette/${recette.id}`}>
                <article className="recettes-card">
                  <h3 className="recettes-title">{recette.title}</h3>
                  <div className="recettes-img-container">
                    <img className="recettes-img" src={imagePath} alt=""/>
                  </div>
                  <p className="recettes-description">{`${recette.description.slice(0, 300)} [...]`}</p>
                  <p className="recettes-read-more">En savoir plus</p>
                </article>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
};

export default Recettes;
