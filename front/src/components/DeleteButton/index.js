import React, { useContext, useState} from "react"
import {useLocation, Redirect} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'
import './style.scss'
import axios from 'axios'
import {FiDelete} from 'react-icons/fi'

const DeleteButton = () => {
  const [token, setToken] = useContext(ConnexionContext)
  const [redirect, setRedirect]= useState(false)
  const deleteURL = axios.default.baseURL + useLocation().pathname
  const handleDelete = () => {
    axios({
      method: 'delete',
      url: deleteURL,
      headers: {'Authorization': `Bearer ${token}`}
    }).then((res)=>{
    console.log('askip ça marche')
    console.log(res.data)
    setRedirect(true) 
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
