import React from 'react';
import amap from '../../../public/contact/amap-location.png'

import './styles.scss';

const Contact = () => (
  <section className="contact">
      <h1 className="page-title">Contact</h1>
      <div className="contact-div">
        <div className="contact-p">
          <p>04 94 62 80 15</p>
          <p>amaplaseynesurmer@hotmail.fr</p>
          <p>64 Chemin Aimé Genoud 83500 La Seyne-sur-Mer</p>
        </div>
        <div className="contact-api-div">
          {/* je ne fais pas de style sur l'image car elle sera remplaçée par l'api google maps par la suite */}
          <img className="img" src={amap} alt=""/>
        </div>
    </div>
  </section>
);

export default Contact;

