
import React, { useContext, useState} from "react"
import {Link, useLocation} from 'react-router-dom'
import './style.scss'
import axios from 'axios'
import {AiFillFileAdd} from 'react-icons/ai'

const AddButton = () => {
  const addUrl = useLocation().pathname + '/add'
  return(
    <Link className="add" to={addUrl}>
    <div className="add-container">
      <p className="text">ajouter</p>
      <AiFillFileAdd className="icon" />
    </div>
    </Link>
  )
}

export default AddButton;
