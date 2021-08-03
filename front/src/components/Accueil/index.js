
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
      <div className="text">Présentation de l'amap</div>
    </Link>
      <Link className="producteurs"to="/producteurs">

      <div className="text">Nos producteurs</div>
      </Link> 
      <Link className="calendrier"to="/calendrier">

      <div className="text">Calendrier de livraison</div>
      </Link> 
      <Link className="actu"to="/articles">

      <div className="text">Actu de l'amap</div>
      </Link> 
      <Link className="recettes"to="/recettes">

      <div className="text">Recettes</div>
      </Link> 
  </div>
)

} 
export default Accueil
