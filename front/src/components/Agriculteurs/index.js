import React from 'react';
// import PropTypes from 'prop-types';
import image from '../../../public/producteurs/producteur 3/profil_1.jpg';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './styles.scss';

const Agriculteurs = () => {
  const productOptions =[
    { key: 'leg', value: 'leg', text: 'Légumes' },
    { key: 'fru', value: 'fru', text: 'Fruits' },
    { key: 'pla', value: 'pla', text: 'Plantes' },
    { key: 'fro', value: 'fro', text: 'Fromages' },
    { key: 'lgmi', value: 'lgmi', text: 'Légumineuses' },
    { key: 'cer', value: 'cer', text: 'Céréales' },
    { key: 'conf', value: 'conf', text: 'Confitures' },
  ];
  
  return (
    <wrapper>
    <article className="producteurs">
      <h1 className="page-title">Nos producteurs</h1>
            <div className="tags-container">
              <div className="tag">
                  <p>Farines</p>
              </div>
              <div className="tag">
                  <p>Fromages</p>
              </div>
              <div className="tag">
                  <p>Fruits</p>
              </div>
              <div className="tag">
                  <p>Legumes</p>
              </div>
              <div className="tag">
                  <p>Miel</p>
              </div>
              <div className="tag">
                  <p>Oeufs</p>
              </div>
              <div className="tag">
                  <p>Pain</p>
              </div>
              <div className="tag">
                  <p>Viandes</p>
              </div>
            </div>
      <div className="producteurs-list">
        {/* Ici un map lors de la dynamisation */}
        <Link to="/agriculteurs/1"> 
        <div className="producteur-card">
          <div className="relative-card">
            <img className="producteur-img" src={image} alt=""/>
            <h3 className="producteur-name">Nom du producteur</h3>
            <div className="tags-container">
              <div className="tag">
                  <p>miel</p>
              </div>
              <div className="tag">
                  <p>fromage</p>
              </div>
            </div>
            <p className="producteur-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a className="read-more" href="">En savoir plus</a>
          </div>
        </div>
          </Link>
        {/* fin du map */}
      </div>
    </article>
    </wrapper>
  )
  };

// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Agriculteurs;
