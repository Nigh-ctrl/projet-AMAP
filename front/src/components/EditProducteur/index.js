
import React, { useState, useEffect, useMemo, useContext}from "react";
import {Redirect} from 'react-router-dom'
import { useParams } from "react-router";
import axios from 'axios';
import './style.scss'

import {ConnexionContext} from '../../ConnexionContext'

  const EditProducteur = () => {
  // on destructure pour récupérer directement id et pas un objet
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const { id_producteur } = useParams();
  const [producteur, setProducteur] = useState([]);
  const [produits, setProduits] = useState([]);
  const [redirect, setRedirect] = useState()
  const [token, setToken] = useContext(ConnexionContext) 


  const getOneProducteur = () => (
    //requete axios
    axios({
      method: 'get',
      // on met comme valeur l'id récupéré via le useParams
      url: `${axios.default.baseURL}/agriculteurs/${id_producteur}`
    })
    .then((res) => {
      setProduits(res.data.basket.split(' ,'));
      setProducteur(res.data);
      console.log(res.data)
    })
    .catch((e) => {
      console.log("erreur lors de la récupération producteur", e);
    })
  )


  const editOneProducteur= () => {
    axios({
      method: 'patch',
      url: `${axios.default.baseURL}/agriculteurs/${id_producteur}`,
      data: producteur,
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
   editOneProducteur()
  }


  function test(){
   console.log(producteur) 
}
  useEffect(getOneProducteur, []);
  useEffect(test)

  if(redirect) return <Redirect to="/"  />

  return(
    <div className="editProducteur">
      <form className="editProducteur-container" onSubmit={handleSubmit}>
        <div className="names-container">
          <div className="firstname">
            <label> prénom</label>
              <textarea id="firstname" name="firstname" value={producteur.firstname} rows='1' cols="25" onChange={(e) => setProducteur({...producteur, firstname: e.target.value})} />
          </div>
          <div className="name">
            <label> nom</label>
              <textarea id="name" name="name" value={producteur.name} rows='1' cols="25" onChange={(e) => setProducteur({...producteur, name: e.target.value})} />
          </div>
        </div>
        <div className="biography">
          <label> biographie</label>
            <textarea className="biography" id="biography" name="biography" value={producteur.biography} rows="40" onChange={(e) => setProducteur({...producteur, biography: e.target.value})}/>
        </div>
        <button type="submit" >enregistrer les modifications</button>
      </form>
    </div>
  )
}

export default EditProducteur
