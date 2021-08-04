
import React, { useState, useEffect, useMemo, useContext}from "react";
import {Redirect} from 'react-router-dom'
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'
import {ConnexionContext} from '../../ConnexionContext'

const AddRecette = () => {
  const [token, setToken] = useContext(ConnexionContext)
  const { id } = useParams();
  const [recetteId, setRecetteId] = useState(id);
  const [recette, setRecette] = useState([{
    title: undefined,
    ingredients: undefined,
    description: undefined,
  }]);

  const addOneRecette = () => {
    axios({
      method: 'post',
      url: `${axios.defaults.baseURL}/recettes`,
      data: recette,
      headers: {'authorization': `Bearer ${token}`}
    }).then((res)=>{
    console.log("je crois que ça marche")
    console.log(res.data)
      }).catch((e) => {
      console.log("il y a une erreur")
      console.log(e)
      })
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    console.log(recette)
  }
  return(
    
    <div className="addRecette">
      <form className="addRecette-container" onSubmit={handleSubmit}>
        <div className="titre">
          <label> titre</label>
            <textarea id="title" name="title" placeholder={"votre titre"} value={recette.title} rows='1' cols="50" onChange={(e) => setRecette({...recette, title: e.target.value})} />
        </div>
        <div className="ingredients">
          <label> ingredients</label>
            <textarea id="ingredients" name="ingredients" placeholder={"ingredients de la recette"} value={recette.ingredients} rows="20" cols="50" className="ingredient" onChange={(e) => setRecette({...recette, ingredients: e.target.value})} />
        </div>
        <div className="description">
          <label> description</label>
            <textarea className="description" id="description" name="description" placeholder={"la description"} value={recette.description} rows="40" onChange={(e) => setRecette({...recette, description: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
}

export default AddRecette;
