import React, { useState, useEffect }from "react";
import NavBar from '../NavBar'
import { useParams } from "react-router";
import axios from 'axios';
import './styles.scss';
import EditButton from '../../EditButton'

const Article = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [articleId, setArticleId] = useState(id);
  const [article, setArticle] = useState([]);

  const getOneArticle = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/articles/${articleId}`
    })
    .then((res) => {
      setArticle(res.data);
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )

  useEffect(getOneArticle, []);

  return (
    <section className="article">
      <h1 className="page-title">{article.title}</h1>
      <NavBar />
        <article className="article-card">
          <EditButton />
          <p className="article-text">
          {article.content}
          </p>
          <img className="article-img" src="https://cdn.pixabay.com/photo/2014/07/18/19/08/fruit-basket-396622_1280.jpg" alt=""/>
      </article>
    </section>
  )
};

export default Article;
