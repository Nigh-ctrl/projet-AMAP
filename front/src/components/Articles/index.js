import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import NavBarre from './NavBarre';
import axios from 'axios';

import './styles.scss';

const Articles = () => {

  const [articles, setArticles] = useState([]);
  
  const getArticles = () => (
    //requete axios
    axios({
      method: 'get',
      url: 'http://localhost:5000/articles',
      data: {
        articles: articles
      }
    })
    .then((res) => {
      console.log(res.data);
      setArticles(res.data);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )

  useEffect(getArticles, []);

  return(
    <section className="articles">
      <h1 className="page-title">Articles</h1>
      <NavBarre />
      <div className="articles-list">
        {/* Ici un map lors de la dynamisation */}
        {
          articles.map((article) => (
            <article key={article.id+article.title} className="articles-card">
              <h3 className="articles-title">{article.title}</h3>
              <img className="articles-img" src="https://thumbs.dreamstime.com/z/panier-en-osier-avec-les-l%C3%A9gumes-organiques-crus-assortis-dans-le-jardin-48896220.jpg" alt=""/>
              <p className="articles-content">{article.content}</p>
              <a className="articles-read-more" href="">En savoir plus</a>
            </article>
          ))
        }
        {/* fin du map */}
      </div>
    </section>
  )
};

// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Articles;
