import React, { useContext} from "react"
import {Link, useLocation, useParams} from 'react-router-dom'
import './style.scss'
import {FaEdit} from 'react-icons/fa'
import {ConnexionContext} from '../../ConnexionContext'

const EditButton = () => {
  const [token, setToken] = useContext(ConnexionContext) 
  const editUrl = useLocation().pathname + "/edit"
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
