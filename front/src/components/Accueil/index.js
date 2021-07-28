
import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'

import './style.scss'

function Accueil () {
  const [token] = useContext(ConnexionContext)
  console.log(token)
return (
  <div className="accueil">
    <div  className="presentation">
    <Link to="/presentation">
      <div className="text">Présentation de l'amap</div>
    </Link>
    </div>
    <div className="producteurs">
      <Link to="/producteurs">

      <div className="text">Nos producteurs</div>
      </Link> 
    </div>
    <div className="calendrier">
      <Link to="/calendrier">

      <div className="text">Calendrier de livraison</div>
      </Link> 
    </div>
    <div className="actu">
      <Link to="/articles">

      <div className="text">Actu de l'amap</div>
      </Link> 
    </div>
    <div className="recettes">
      <Link to="/recettes">

      <div className="text">Recettes</div>
      </Link> 
    </div>
  </div>
)

} 
export default Accueil
