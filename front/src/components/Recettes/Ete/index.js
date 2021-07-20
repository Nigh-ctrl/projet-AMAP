import React from 'react';
// import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Input } from 'semantic-ui-react';

import './styles.scss';

const Ete = () => (
<section className="été">
    <h1 className="page-title">Recettes d'Eté</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="eté-navBar">
      <a className="nav-link" href="">Printemps</a>
      <a className="clicked" href="">Eté</a>
      <a className="nav-link" href="">Automne</a>
    <a className="nav-link" href="">Hiver</a>
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher...'/>
      </form>
    </nav>
    <div className="été-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="été-card">
        <h3 className="été-title">Recette Eté 1</h3>
        <p></p>
        <img className="été-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
        <a className="été-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="été-card">
        <h3 className="été-title">Recette Eté 2</h3>
        <p></p>
        <img className="été-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
        <a className="été-read-more" href="">En savoir plus</a>
      </article>
      <article className="été-card">
        <h3 className="été-title">Recette Eté 3</h3>
        <p></p>
        <img className="été-img" src="https://media.istockphoto.com/photos/senior-grandmother-with-grandson-carrying-wooden-box-with-apples-in-picture-id1059234782?s=612x612" alt=""/>
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
