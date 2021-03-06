
import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'

import './style.scss'

function Accueil () {
  const [token] = useContext(ConnexionContext)
  console.log(token)
return (
  <div className="accueil">
    <Link className="presentation"to="/presentation">
      <p className="text">Présentation de l'Amap</p>
    </Link>
      <Link className="producteurs"to="/producteurs">
      <div className="text">Nos Producteurs</div>
      </Link> 
      <Link className="calendrier"to="/calendrier">
      <div className="text">Calendrier de livraison</div>
      </Link> 
      <Link className="actu"to="/articles">
      <div className="text">Actu de l'Amap</div>
      </Link> 
      <Link className="recettes"to="/recettes">
      <div className="text">Recettes</div>
      </Link> 
  </div>
)

} 
export default Accueil
