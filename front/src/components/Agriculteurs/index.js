import React from 'react';
// import PropTypes from 'prop-types';
import image from '../../../public/producteurs/producteur 3/profil_1.jpg';

import './styles.scss';

const Agriculteurs = () => (
  <article className="agriculteurs">
    <h1 className="page-title">Nos agriculteurs</h1>
    <form action="POST">
    <div className="agriculteurs-form">
      <input type="text" id="producteurs" name="produit" placeholder="Ex: miel"/>
    </div>
    </form>
    <p className="agriculteurs-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="agriculteurs-list">
      {/* Ici un map lors de la dynamisation */}
      <div className="agriculteurs-card">
        <div className="relative-card">
          <img className="agriculteurs-img" src={image} alt=""/>
          <h3 className="agriculteurs-name">Nom de l'agriculteur</h3>
          <div className="agriculteurs-tags">
            <p className="tag">Miel</p>
            <p className="tag">Fromage</p>
          </div>
          <p className="agriculteurs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="read-more" href="">En savoir plus</a>
        </div>
      </div>
      {/* fin du map */}
      <div className="agriculteurs-card">
        <div className="relative-card">
          <img className="agriculteurs-img" src={image} alt=""/>
          <h3 className="agriculteurs-name">Nom de l'agriculteur</h3>
          <div className="agriculteurs-tags">
            <p className="tag">Miel</p>
            <p className="tag">Fromage</p>
          </div>
          <p className="agriculteurs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="read-more" href="">En savoir plus</a>
        </div>
      </div><div className="agriculteurs-card">
        <div className="relative-card">
          <img className="agriculteurs-img" src={image} alt=""/>
          <h3 className="agriculteurs-name">Nom de l'agriculteur</h3>
          <div className="agriculteurs-tags">
            <p className="tag">Miel</p>
            <p className="tag">Fromage</p>
          </div>
          <p className="agriculteurs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="read-more" href="">En savoir plus</a>
        </div>
      </div><div className="agriculteurs-card">
        <div className="relative-card">
          <img className="agriculteurs-img" src={image} alt=""/>
          <h3 className="agriculteurs-name">Nom de l'agriculteur</h3>
          <div className="agriculteurs-tags">
            <p className="tag">Miel</p>
            <p className="tag">Fromage</p>
          </div>
          <p className="agriculteurs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="read-more" href="">En savoir plus</a>
        </div>
      </div><div className="agriculteurs-card">
        <div className="relative-card">
          <img className="agriculteurs-img" src={image} alt=""/>
          <h3 className="agriculteurs-name">Nom de l'agriculteur</h3>
          <div className="agriculteurs-tags">
            <p className="tag">Miel</p>
            <p className="tag">Fromage</p>
          </div>
          <p className="agriculteurs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="read-more" href="">En savoir plus</a>
        </div>
      </div>
    </div>
  </article>
);

// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Agriculteurs;
