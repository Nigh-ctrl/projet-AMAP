import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.scss';

const Recettes = () => {

  const [recettes, setRecettes] = useState([]);
  
  const getRecipes = () => (
    //requete axios
    axios({
      method: 'get',
      url: 'http://localhost:5000/recettes',
      data: {
        recettes: recettes
      }
    })
    .then((res) => {
      // console.log(res.data);
      setRecettes(res.data);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )
 
  useEffect(getRecipes, []);

  return(
    <section className="recettes">
      <h1 className="page-title">Recettes</h1>
      {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
      <nav className="recettes-navBar">
      <a className="clicked" href="">Accueil des Recettes</a>
        <a className="nav-link" href="">Recette de printemps</a>
        <a className="nav-link" href="">Recette d'été</a>
        <a className="nav-link" href="">Recette d'automne</a>
        <a className="nav-link" href="">Recette d'hiver</a>
        <form action="POST">
        <input placeholder='Rechercher par produit...'/>
        </form>
      </nav>
      <div className="recettes-list">
        {
          recettes.map((recette) => (
            <Link key={recette.id+recette.name} to={`/recette/${recette.id}`}>
              <article  className="recettes-card">
                <h3 className="recettes-title">{recette.title}</h3>
                <img className="recettes-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
                <p>{recette.description}</p>
                <p className="recettes-read-more">En savoir plus</p>
              </article>
            </Link>
          ))
        }
      </div>
    </section>
  )
};

{/* <Route path="/recette/:nom-recette" exact component={Recette}/> */}
// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Recettes;
