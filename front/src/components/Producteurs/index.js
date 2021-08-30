import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import addButton from '../AddButton'
import {ConnexionContext}  from '../../ConnexionContext.js'
import './styles.scss';
import AddButton from '../AddButton';


const Agriculteurs = () => {
  const [producteurs, setProducteurs] = useState([]);
  const getProducteurs = () => (
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/producteurs`
    })
    .then((res) => {
    setProducteurs(res.data)
    console.log(res.data)
    })
    .catch((e) => {
      console.log("erreur lors de la requete producteurs", e);
    })
  )

  // j'utilise countRef juste pour eviter une boucle infini, pas trés propre
  // TODO trouver une autre solution
    const countRef = useRef(0);
  useEffect(getProducteurs, [countRef])
  console.log(window.location.origin)

  //cette constante me sert a traduire les id des produits dans les mots qui leurs correspondent
  const productsIdValue = {
    1 : "Légumes",
    2 : "Fruit",
    3 : "Aromates",
    4 : "Fromages",
    5 : "Légumineuse",
    6 : "Farine",
    7 : "Confiture",
    8 : "Oeufs",
    9 : "Viandes",
    10 : "Miel",
    11 : "Pain"
  };
  return(
    <main>
      <article>
        <h1 className="page-title">Nos Producteurs</h1>
        <div className="tags-container">
         {
           //ligne un peu allambiqué qui me permet de map sur l'object productsIdValue
          Object.values(productsIdValue).map(value =>{
            return(
              <Link className="tag">
                <p className="tag p">{value}</p>
              </Link>
            )
          })
         } 
        </div>
        <div className="producteurs-list">
        {
          producteurs.map(producteur => {
            let productsIDs = producteur.products_id.split(',')
            return(
              <div key={producteur.id} className="producteurs-card">
                <Link to={`/producteurs/${producteur.id}`}>
                <div className="relative-card" >
                  <div className="producteurs-img-container"> 
                    <img className="producteurs-card-img" src={`/producteurs/producteur ${producteur.id}/profil_1.jpg`}/>
                  </div>
                  <h3 className="producteurs-card-name">{`${producteur.firstname} ${producteur.name}`}</h3>
                  <div className="tags-container">
                  </div>
                  <div className="tags-container">
                    {
                      productsIDs.map(productID => {
                        return(
                        <div key={productID} className="tag">
                            <p className="tag p">{productsIdValue[productID]}</p>
                        </div>
                        )
                      })
                    }
                  </div>
                  <p className="producteurs-card-text">{producteur.biography.slice(0, 300) + "[...]"}</p>
                  <p className="producteurs-card-read-more">En savoir plus</p>
                </div>
                </Link>
              </div>
          )
        })
        }
        </div>
      </article>
    </main>
  )
}

export default Agriculteurs;
