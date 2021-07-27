import React, { useState, useEffect }from "react";
import NavBarre from '../NavBarre'
import { useParams } from "react-router";
import axios from 'axios';
// import PropTypes from 'prop-types';

import './styles.scss';

const Evenements = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [articleId, setArticleId] = useState(id);
  const [article, setArticle] = useState([]);

  const getOneArticle = () => (
    //requete axios
    axios({
      method: 'get',
      url: `http://localhost:5000/articles/${articleId}`
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
    <section className="evenements">
      <h1 className="page-title">{article.title}</h1>
      <NavBarre />
      <div className="evenements-list">
        <article className="evenements-card">
          <h3 className="evenements-title"></h3>
          <p className="evenements-text">
          {article.content}
          </p>
        </article>
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

export default Evenements;
