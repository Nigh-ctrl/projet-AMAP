import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AddButton from '../AddButton'
import {ConnexionContext} from '../../ConnexionContext.js'

// import des photos des recettes
import benevole from '../../../public/articles/benevole.jpeg';
import cuire from '../../../public/articles/cuire.jpeg';
import miel from '../../../public/articles/miel2.jpeg';
import amap from '../../../public/articles/nouvelle-amap.jpeg';
import jeune from '../../../public/articles/jeune.jpeg';
import panier from '../../../public/articles/panier.jpeg';
import panier2 from '../../../public/articles/panier2.jpeg';

import './styles.scss';

const Articles = () => {

  const { category } = useParams();

  const [articles, setArticles] = useState([]);
  const [token, setToken] = useContext(ConnexionContext)
  
  const getArticles = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/articles`
    })
    .then((res) => {
      if(category === undefined){
        setArticles(res.data);
        return
      }
      const articlesFiltre = res.data.filter(article => (article.category_id == category));
      setArticles(articlesFiltre);
    })
    .catch((e) => {
      console.log("erreur lors de la requete articles", e);
    })
  )

  useEffect(getArticles, [category]);

    let imagePath;
    
    if(token){
      return(
    <section className="articles">
      <h1 className="page-title">Actu de l'Amap</h1>
      <NavBar />
      <AddButton />
      <div className="articles-list">
        {
          articles.map((article) => {
            switch (article.id){
              case 1:
                imagePath = panier;
              break;
              case 2:
                imagePath = miel;
              break;
              case 3:
                imagePath = amap;
              break;
              case 4:
                imagePath = cuire;
              break;
              case 5:
                imagePath = benevole;
              break;
              case 6:
                imagePath = panier2;
              break;
              case 7:
                imagePath = jeune;
              break;
            }
            return(
            <Link className="articles-a" key={article.id+article.title} to={`/article/${article.id}`}>
              <article className="articles-card">
                <h3 className="articles-title">{article.title}</h3>
                <div className="articles-img-container">
                  <img className="articles-img" src={imagePath} alt=""/>
                </div>
                <p className="articles-content">{`${article.content.slice(0, 300)} [...]`}</p>
                <p className="articles-read-more">En savoir plus</p>
              </article>
            </Link>
          )})
        }
      </div>
    </section>
    )
  }

  return(
    <section className="articles">
      <h1 className="page-title">Actu de l'Amap</h1>
      <NavBar />
      <div className="articles-list">
        {
          articles.map((article) => {
            switch (article.id){
              case 1:
                imagePath = panier;
              break;
              case 2:
                imagePath = miel;
              break;
              case 3:
                imagePath = amap;
              break;
              case 4:
                imagePath = cuire;
              break;
              case 5:
                imagePath = benevole;
              break;
              case 6:
                imagePath = panier2;
              break;
              case 7:
                imagePath = jeune;
              break;
            }
            return(
            <Link className="articles-a" key={article.id+article.title} to={`/article/${article.id}`}>
              <article className="articles-card">
                <h3 className="articles-title">{article.title}</h3>
                <div className="articles-img-container">
                  <img className="articles-img" src={imagePath} alt=""/>
                </div>
                <p className="articles-content">{`${article.content.slice(0, 300)} [...]`}</p>
                <p className="articles-read-more">En savoir plus</p>
              </article>
            </Link>
          )})
        }
      </div>
    </section>
  )
};

export default Articles;
