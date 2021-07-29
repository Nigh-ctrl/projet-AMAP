import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import './styles.scss';

const Articles = () => {

  const { category } = useParams();

  const [articles, setArticles] = useState([]);
  
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

  return(
    <section className="articles">
      <h1 className="page-title">Actu de l'amap</h1>
      <NavBar />
      <div className="articles-list">
        {
          // on ne garde que le component Evenements qui devra etre renommé en Article
          articles.map((article) => (
            <Link key={article.id+article.title} to={`/article/${article.id}`}>
              <article className="articles-card">
                <h3 className="articles-title">{article.title}</h3>
                <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
                <p className="articles-content">{article.content}</p>
                <p className="articles-read-more">En savoir plus</p>
              </article>
            </Link>
          ))
        }
      </div>
    </section>
  )
};

export default Articles;
