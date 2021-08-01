import React, { useState, useEffect } from 'react';
import profil from '../../../../public/producteurs/producteur 1/profil_1.jpg';
import { useParams } from "react-router";
import axios from 'axios';

import './styles.scss'

const Agriculteur = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id_producteur } = useParams();

  const [producteur, setProducteur] = useState([]);
  
  const getOneProducteur = () => (
    //requete axios
    axios({
      method: 'get',
      // on met comme valeur l'id récupéré via le useParams
      url: `http://localhost:5000/agriculteurs/${id_producteur}`
    })
    .then((res) => {
      setProducteur(res.data);
    })
    .catch((e) => {
      console.log("erreur lors de la récupération producteur", e);
    })
  )

  useEffect(getOneProducteur, []);

  
  const products = producteur.basket;
  // products.split();
  console.log(products);

  return (
    <section className="agriculteur">
      <div className="agriculteur-main">
        <div className="agriculteur-images">
          <img src={profil} alt=""/>
          <div className="agriculteur-location">
            <img src="https://www.journaldugeek.com/content/uploads/2017/02/google-maps-640x360.jpg" alt=""/>
          </div>
        </div>
        <article className="agriculteur-presentation">
          <h1>{`${producteur.firstname} ${producteur.name}`}</h1>
            <h2>Présentation</h2>
            <p>
            {producteur.biography}
            </p>
            <h2>Les produits proposés</h2>
            <div className="agriculteur-product">
              <ul>
                {/* Ici un map pour la liste des produits */}
                {
                  <li>{producteur.basket}</li>
                }
              </ul>
            </div>
        </article>
      </div>
    </section>
  )
};

export default Agriculteur;
