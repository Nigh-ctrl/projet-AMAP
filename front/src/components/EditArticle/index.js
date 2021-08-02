
import React, { useState, useEffect, useMemo, useContext}from "react";
import {Redirect} from 'react-router-dom'
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'

import {ConnexionContext} from '../../ConnexionContext'

const EditArticle = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [articleId, setArticleId] = useState(id);
  const [article, setArticle] = useState([]);
  const [redirect, setRedirect] = useState()
  const [token, setToken] = useContext(ConnexionContext) 

  const getOneArticle = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/articles/${articleId}`
    })
    .then((res) => {
      setArticle(res.data);
      console.log(res.data)
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )


  const editOneArticle= () => {
    axios({
      method: 'patch',
      url: `${axios.default.baseURL}/articles/${articleId}`,
      data: article,
      headers: {'Authorization': `Bearer ${token}`},
    }).then((res) => {
    alert('modifications enregistrées')
    setRedirect(true)
      })
      .catch((e)=>{
      console.log(`erreur ultime`)
      console.log(e)
      })
    }
    

  const handleSubmit= (e) => {
   e.preventDefault();
   editOneArticle()
  }

  useEffect(getOneArticle, []);

  if(redirect) return <Redirect to="/"  />

  return(
    <div className="editArticle">
      <form className="editArticle-container" onSubmit={handleSubmit}>
        <div className="titre">
          <label> titre</label>
            <textarea id="title" name="title" value={article.title} rows='1' cols="50" onChange={(e) => setArticle({...article, title: e.target.value})} />
        </div>
        <div className="content">
          <label> description</label>
            <textarea className="content" id="content" name="content" value={article.content} rows="40" onChange={(e) => setArticle({...article, content: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
}

export default EditArticle;
