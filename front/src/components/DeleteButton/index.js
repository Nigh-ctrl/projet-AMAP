import React, { useContext, useState} from "react"
import {useLocation, Redirect, useParams} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'
import './style.scss'
import axios from 'axios'
import {FiDelete} from 'react-icons/fi'

const DeleteButton = () => {
  const [token, setToken] = useContext(ConnexionContext)
  const [redirect, setRedirect]= useState(false)
  const currentUrl = useLocation().pathname

  String.prototype.cleanUp = function(){
    switch (this.replace(/[0-9'/']/g, '')) {
      case 'producteur':
          const {id_producteur} = useParams()
          return this.replace(/[0-9'/']/g, '') + `s/${id_producteur}`
        break;
      default:
          const {id} = useParams()
          return this.replace(/[0-9'/']/g, '') + `s/${id}`
        break;
    }
  }

  const deleteURL = '/'+currentUrl.cleanUp()

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: axios.default.baseURL + deleteURL,
      headers: {'Authorization': `Bearer ${token}`}
    }).then((res)=>{
    console.log('askip ça marche')
    console.log(res.data)
    setRedirect(true) 
      })
    .catch((e)=>{
    alert("une erreur est servenue")
    console.log(e)
      })
  }
  if(redirect){
    return(
      <Redirect to="/" />
    )
  }
  return(
    <div className="delete-container" onClick={handleDelete}>
      <p className="text">supprimer</p>
      <FiDelete className="icon" />
    </div>
  )
}

export default DeleteButton;
