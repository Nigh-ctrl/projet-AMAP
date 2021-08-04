import React, { useState, useEffect, useMemo, useContext}from "react";
import {Redirect} from 'react-router-dom'
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'

import {ConnexionContext} from '../../ConnexionContext'

const AddArticle = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [article, setArticle] = useState({
    slug: "default_slug",
    admin_id: 2,
    category_id: 1,
  });
  const [redirect, setRedirect] = useState()
  const [token, setToken] = useContext(ConnexionContext) 

  const addOneArticle = () => {
    axios({
      method: 'post',
      url: `${axios.default.baseURL}/articles`,
      data: article,
      headers: {'authorization' : `Bearer ${token}`}
    })
    .then((res)=>{
    console.log("ça marche")
    console.log(res.data)
      })
    .catch((e)=>{
    console.log("erreur")
    console.log(e)
      })
  }

  const handleSubmit= (e) => {
   e.preventDefault();
   addOneArticle()
  }


  if(redirect) return <Redirect to="/"  />

  return(
    <div className="addArticle">
      <form className="addArticle-container" onSubmit={handleSubmit}>
        <div className="titre">
          <label> titre</label>
            <textarea id="title" name="title" placeholder="votre titre ici" value={article.title} rows='1' cols="50" onChange={(e) => setArticle({...article, title: e.target.value})} />
        </div>
        <div className="content">
          <label> description</label>
            <textarea className="content" id="content" name="content" placeholder="contenu de l'article" value={article.content} rows="40" onChange={(e) => setArticle({...article, content: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
}

export default AddArticle;
