import React, { useContext, useState} from "react"
import {Link, useLocation, useParams} from 'react-router-dom'
import './style.scss'
import {FaEdit} from 'react-icons/fa'
import {ConnexionContext} from '../../ConnexionContext'

const EditButton = () => {
  const [token, setToken] = useContext(ConnexionContext) 
  const { id } = useParams();
  // on met comme valeur l'id récupéré via le useParams
  const [recetteId, setRecetteId] = useState(id);
  const editUrl = useLocation().pathname + "/edit"
  console.log(editUrl)
  return(
    <Link className="edit" to={editUrl}>
    <div className="edit-container">
      <p className="text">éditer</p>
      <FaEdit className="icon" />
    </div>
    </Link>
  )
}

export default EditButton;
