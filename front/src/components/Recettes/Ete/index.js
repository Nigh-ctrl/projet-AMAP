import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Ete = () => (
<section className="été">
    <h1 className="page-title">Recettes d'été</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="été-navBar">
      
      
      <a className="nav-link" href="">Recette de printemps</a>
      <a className="nav-link" href="">Recette d'été</a>
      <a className="clicked" href="">Recette d'été</a>
      <a className="nav-link" href="">Recette d'hiver</a>

      
      
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher...'/>
      </form>
    </nav>
    <div className="été-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="été-card">
        <h3 className="été-title">Recette d'été 1</h3>
        <p></p>
        <img className="été-img" src="https://previews.123rf.com/images/timolina/timolina1803/timolina180300451/97690451-assiette-de-salade-saine-recette-de-fruits-de-mer-frais-crevettes-grill%C3%A9es-et-salade-de-l%C3%A9gumes-frai.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="été-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="été-card">
        <h3 className="été-title">Recette d'été 2</h3>
        <img className="été-img" src="https://previews.123rf.com/images/timolina/timolina1803/timolina180300451/97690451-assiette-de-salade-saine-recette-de-fruits-de-mer-frais-crevettes-grill%C3%A9es-et-salade-de-l%C3%A9gumes-frai.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="été-read-more" href="">En savoir plus</a>
      </article>
      <article className="été-card">
        <h3 className="été-title">Recette d'été 3</h3>
        <img className="été-img" src="https://previews.123rf.com/images/timolina/timolina1803/timolina180300451/97690451-assiette-de-salade-saine-recette-de-fruits-de-mer-frais-crevettes-grill%C3%A9es-et-salade-de-l%C3%A9gumes-frai.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="été-read-more" href="">En savoir plus</a>
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

export default Ete;

