import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import addButton from '../AddButton'

// import de toutes les photos des producteurs. Trouver une autre solution
import one from '../../../public/producteurs/producteur 1/profil_1.jpg';
import three from '../../../public/producteurs/producteur 3/profil_1.jpg';
import four from '../../../public/producteurs/producteur 4/profil_1.jpg';
import six from '../../../public/producteurs/producteur 6/profil_1.jpg';
import height from '../../../public/producteurs/producteur 8/profil_1.jpg';


import './styles.scss';
import AddButton from '../AddButton';

const Agriculteurs = () => {
  // Récupération du slug correspondant a l'id de chaque produit
  const { produits } = useParams();

  const [producteurs, setProducteurs] = useState([]);
  
  const getProducteurs = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/producteurs`
    })
    .then((res) => {
      if(produits === undefined){
        setProducteurs(res.data);
        console.log("sur le tri", produits, res.data);
        return
      }
      // je filtre les agriculteur en fonction de leur products_id,
      //le split me permet de récupérer les valeur une part une
      // et le include de ne retenir ce celles qui correspondent
      const productsFiltre = res.data.filter(products => {
        const productsId = products.products_id.split(',');
        return(productsId.includes(produits))
      });
      setProducteurs(productsFiltre);
      console.log("sur le tri", produits, productsFiltre);
    })
    .catch((e) => {
      console.log("erreur lors de la requete producteurs", e);
    })
  )

  useEffect(getProducteurs, [produits]);

  // Objet qui me permet de lier product_id et les produit sous forme de string
  const productIdValue = {
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
  // initialisation de la variable qui me sert a stocker le chemin de la photo
  let imagePath;

  return (
    <main>
              <AddButton/>
    <article className="producteurs">
      <h1 className="page-title">Nos producteurs</h1>
            <div className="tags-container">
            <Link to={`/producteurs/1`}>
              <div className="tag">
                  <p>Légumes</p>
              </div>
            </Link>
            <Link to={`/producteurs/2`}>
              <div className="tag">
                  <p>Fruits</p>
              </div>
            </Link>
            <Link to={`/producteurs/3`}>
              <div className="tag">
                  <p>Aromates</p>
              </div>
            </Link>
            <Link to={`/producteurs/4`}>
              <div className="tag">
                  <p>Fromages</p>
              </div>
            </Link>
            <Link to={`/producteurs/5`}>
              <div className="tag">
                  <p>Légumineuse</p>
              </div>
            </Link>
            <Link to={`/producteurs/6`}>
              <div className="tag">
                  <p>Farine</p>
              </div>
            </Link>
            <Link to={`/producteurs/7`}>
              <div className="tag">
                  <p>Confiture</p>
              </div>
            </Link>
            <Link to={`/producteurs/8`}>
              <div className="tag">
                  <p>Oeufs</p>
              </div>
            </Link>
            <Link to={`/producteurs/9`}>
              <div className="tag">
                  <p>Viande</p>
              </div>
            </Link>
            <Link to={`/producteurs/10`}>
              <div className="tag">
                  <p>Miel</p>
              </div>
            </Link>
            <Link to={`/producteurs/11`}>
              <div className="tag">
                  <p>Pain</p>
              </div>
            </Link>
            </div>
      <div className="producteurs-list">
        {
          producteurs.map(producteur => {
            // je récupère les products_id de chaque producteurs dans un tableau (les elements sont unitaires)
            const product = producteur.products_id.split(',');
            // dans chaque cas on affiche envoie un chemin différent en fonction de l'id du producteur
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
            <div key={producteur.id} className="producteur-card">
            <Link to={`/producteurs/${producteur.id}`}>
              <div className="relative-card">
                <img className="producteur-img" src={imagePath} alt=""/>
                <h3 className="producteur-name">{`${producteur.firstname} ${producteur.name}`}</h3>
                <div className="tags-container">
                {
                  product.map(product => {
                    return(
                      <div key={product} className="tag">
                        {/* On affiche seulement les produits correspondants aux bonnes keys de l'objet productIdValue */}
                        <p>{Object.values(productIdValue[product])}</p>
                      </div>
                    )
                  })
                }
                </div>
                {/* Avec slice on réduit le text au 300 premiers caractères */}
                <p className="producteur-card-text">{`${producteur.biography.slice(0, 300)} [...]`}</p>
                <p className="read-more" >En savoir plus</p>
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
  };

export default Agriculteurs;
