import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar';

import './styles.scss';

const Recettes = () => {
  const { saison } = useParams();

  const [recettes, setRecettes] = useState([]);
  
  const getRecipes = () => (
    //requete axios
    axios({
      method: 'get',
      url: 'http://localhost:5000/recettes'
    })
    .then((res) => {
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

  return(
    <section className="recettes">
      <h1 className="page-title">Recettes</h1>
      <NavBar />
      <div className="recettes-list">
        {
          recettes.map((recette) => {
            let ingredient = recette.ingredients.split(',')
            return (
              <Link key={recette.id+recette.slug} to={`/recette/${recette.id}`}>
                <article className="recettes-card">
                  <h3 className="recettes-title">{recette.title}</h3>
                  <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
                  <p className="recettes-description">{`${recette.description.slice(0, 300)} [...]`}</p>
                  <ul className="recettes-igredients">
                    {
                      ingredient.map(row => (
                        <li key={row}>{row}</li>
                      ))
                    }
                  </ul>
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
