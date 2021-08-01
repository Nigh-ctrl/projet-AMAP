import React, { useState, useEffect, useMemo, useContext}from "react";
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'

import {ConnexionContext} from '../../ConnexionContext'

const EditRecette = () => {
  const [token, setToken] = useContext(ConnexionContext) 
  const { id } = useParams();
  const [recetteId, setRecetteId] = useState(id);
  const [recette, setRecette] = useState([]);

  const getOneRecipe = () => (
    //requete axios
    axios({
      method: 'get',
      url: `${axios.default.baseURL}/recettes/${recetteId}`
    })
    .then((res) => {
      setRecette(res.data);
      console.log(res.data)
      console.log(`le token = ${token}`)
    })
    .catch((e) => {
      console.log("erreur lors du login", e);
    })
  )
  
  const editOneRecipe= () => {
    axios({
      method: 'patch',
      url: `${axios.default.baseURL}/recettes/${recetteId}`,
      data: recette,
      headers: {'Authorization': `Bearer ${token}`},
    }).then((res) => {
    console.log(res)
      })
      .catch((e)=>{
      console.log(`erreur ultime`)
      console.log(e)
      })
    }
    

  const handleSubmit= (e) => {
   e.preventDefault();
   editOneRecipe()
  }

  useEffect(getOneRecipe, [])

 if(recette){
  return(
    <div className="editRecette">
      <form className="editRecette-container" onSubmit={handleSubmit}>
        <div className="titre">
          <label> titre</label>
            <textarea id="title" name="title" value={recette.title} rows='1' cols="50" onChange={(e) => setRecette({...recette, title: e.target.value})} />
        </div>
        <div className="ingredients">
          <label> ingredients</label>
            <textarea id="ingredients" name="ingredients" value={recette.ingredients} rows="20" cols="50" className="ingredient" onChange={(e) => setRecette({...recette, ingredients: e.target.value})} />
        </div>
        <div className="description">
          <label> descriptions</label>
            <textarea className="description" id="description" name="description" value={recette.description} rows="40" onChange={(e) => setRecette({...recette, description: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
  } 

}

export default EditRecette;
