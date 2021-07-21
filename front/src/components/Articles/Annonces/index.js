import React from 'react';
import NavBarre from '../NavBarre';
// import PropTypes from 'prop-types';

import './styles.scss';

const Annonces = () => (
<section className="annonces">
    <h1 className="page-title">Annonces</h1>
    <NavBarre />
    <div className="annonces-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="annonces-card">
        <h3 className="annonces-title">Recherche de main d'oeuvre</h3>
        <p>Pour la période du 10/08 au 16/08</p>
        <img className="annonces-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
        <a className="annonces-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="annonces-card">
        <h3 className="annonces-title">Recherche de main d'oeuvre</h3>
        <p>Pour la période du 10/08 au 16/08</p>
        <img className="annonces-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
        <a className="annonces-read-more" href="">En savoir plus</a>
      </article>
      <article className="annonces-card">
        <h3 className="annonces-title">Recherche de main d'oeuvre</h3>
        <p>Pour la période du 10/08 au 16/08</p>
        <img className="annonces-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
        <a className="annonces-read-more" href="">En savoir plus</a>
      </article>
    </div>
  </section>
);


// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Annonces;
