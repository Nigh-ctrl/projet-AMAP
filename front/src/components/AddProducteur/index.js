import React, { useState, useEffect, useMemo, useContext}from "react";
import {Redirect} from 'react-router-dom'
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'
import {ConnexionContext} from '../../ConnexionContext'

  const addProducteur = () => {
  const [producteur, setProducteur] = useState({
    slug: "default_slug",
    location: "la Seyne-sur-Mer",
    basket: "des oeufs",
    products_id: [1, 3],
    admin_id: 2,
  });
  const [redirect, setRedirect] = useState()
  const [token, setToken] = useContext(ConnexionContext) 

  const addOneProducteur= () => {
    axios({
      method: 'post',
      url: `${axios.default.baseURL}/producteurs`,
      data: producteur,
      headers: {'Authorization': `Bearer ${token}`},
    }).then((res) => {
    alert('modifications enregistrées')
    setRedirect(true)
      })
      .catch((e)=>{
      console.log(`erreur ultime`)
      console.log(e)
      console.log("ce que j'envoie")
      console.log(producteur)
      })
    }
    

  const handleSubmit= (e) => {
   e.preventDefault();
   addOneProducteur()
  }



  if(redirect) return <Redirect to="/"  />

  return(
    <div className="addProducteur">
      <form className="addProducteur-container" onSubmit={handleSubmit}>
        <div className="names-container">
          <div className="firstname">
            <label> prénom</label>
              <textarea id="firstname" name="firstname" placeholder="jean" value={producteur.firstname} rows='1' cols="25" onChange={(e) => setProducteur({...producteur, firstname: e.target.value})} />
          </div>
          <div className="name">
            <label> nom</label>
              <textarea id="name" name="name" value={producteur.name} placeholder="dupont" rows='1' cols="25" onChange={(e) => setProducteur({...producteur, name: e.target.value})} />
          </div>
        </div>
        <div className="biography">
          <label> biographie</label>
            <textarea className="biography" id="biography" name="biography" placeholder="une petite biographie du producteur" value={producteur.biography} rows="40" onChange={(e) => setProducteur({...producteur, biography: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
}

export default addProducteur
