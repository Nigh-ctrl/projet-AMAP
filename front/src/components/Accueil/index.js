import React from 'react';

import './style.scss'

const Accueil = () => (
  <div className="accueil">
    <div  className="presentation">
      <div className="text">Présentation de l'amap</div>
    </div>
    <div className="producteurs">
      <div className="text">Nos producteurs</div>
    </div>
    <div className="calendrier">
      <div className="text">Calendrier de livraison</div>
    </div>
    <div className="actu">
      <div className="text">Actu de l'amap</div>
    </div>
    <div className="recettes">
      <div className="text">Recettes</div>
    </div>
  </div>
)

export default Accueil
