import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import EditButton from '../../EditButton'

// import de toutes les photos des producteurs. Trouver une autre solution
import one from '../../../../public/producteurs/producteur 1/profil_1.jpg';
import three from '../../../../public/producteurs/producteur 3/profil_1.jpg';
import four from '../../../../public/producteurs/producteur 4/profil_1.jpg';
import six from '../../../../public/producteurs/producteur 6/profil_1.jpg';
import height from '../../../../public/producteurs/producteur 8/profil_1.jpg';


import './styles.scss'

const Producteur = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id_producteur } = useParams();

  const [producteur, setProducteur] = useState([]);
  const [produits, setProduits] = useState([]);
  
  const getOneProducteur = () => (
    //requete axios
    axios({
      method: 'get',
      // on met comme valeur l'id récupéré via le useParams
      url: `http://localhost:4000/agriculteurs/${id_producteur}`
    })
    .then((res) => {
      setProduits(res.data.basket.split(' ,'));
      setProducteur(res.data);
    })
    .catch((e) => {
      console.log("erreur lors de la récupération producteur", e);
    })
  )

  useEffect(getOneProducteur, []);

  // creation d'un id pour gestion de la key
  let id = 0;

  // initialisation de la variable qui me sert a stocker le chemin de la photo
  let imagePath;
  switch (producteur.id){
    case 1:
      imagePath = one;
    break;
    case 2:
      imagePath = '';
    break;
    case 3:
      imagePath = three;
    break;
    case 4:
      imagePath = four;
    break;
    case 5:
      imagePath = '';
    break;
    case 6:
      imagePath = six;
    break;
    case 7:
      imagePath = '';
    break;
    case 8:
      imagePath = height;
    break;
  }

  return (
    <section className="agriculteur">
      <div className="agriculteur-main">
        <EditButton />
        <div className="agriculteur-images">
          <img src={imagePath} alt=""/>
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
                  produits.map(produit => {
                    return(
                    <li key={++id}>{produit}</li>
                  )}
                  )                  
                }
              </ul>
            </div>
        </article>
      </div>
    </section>
  )
};

export default Producteur;
