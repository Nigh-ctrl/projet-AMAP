import React, { useState, useEffect, useContext }from "react";
import NavBar from '../NavBar'
import { useParams } from "react-router";
import axios from 'axios';
import './styles.scss';
import EditButton from '../../EditButton'
import {ConnexionContext} from '../../../ConnexionContext'

// import des photos des recettes
import benevole from '../../../../public/articles/benevole.jpeg';
import cuire from '../../../../public/articles/cuire.jpeg';
import miel from '../../../../public/articles/miel2.jpeg';
import amap from '../../../../public/articles/nouvelle-amap.jpeg';
import jeune from '../../../../public/articles/jeune.jpeg';
import panier from '../../../../public/articles/panier.jpeg';
import panier2 from '../../../../public/articles/panier2.jpeg';

const Article = () => {
  const token = useContext(ConnexionContext)
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

  let imagePath;
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

  if(token[0]){
    return(
    <section className="article">
      <h1 className="page-title">{article.title}</h1>
      <NavBar />
        <article className="article-card">
          <EditButton />
          <p className="article-text">
          {article.content}
          </p>
          <img className="article-img" src={imagePath} alt=""/>
      </article>
    </section>
    ) 
  }
  return (
    <section className="article">
      <h1 className="page-title">{article.title}</h1>
      <NavBar />
        <article className="article-card">
          <p className="article-text">
          {article.content}
          </p>
          <img className="article-img" src={imagePath} alt=""/>
      </article>
    </section>
  )
};

export default Article;
