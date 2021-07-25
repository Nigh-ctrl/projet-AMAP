import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const Hiver = () => (
<section className="hiver">
    <h1 className="page-title">Recettes d'hiver</h1>
    {/* Ajout de NavLink pour indiquer quelle est la page affichée (activeClassName)*/}
    <nav className="hiver-navBar">
      <a className="nav-link" href="">Recette de printemps</a>
      <a className="nav-link" href="">Recette d'été</a>
      <a className="nav-link" href="">Recette d'automne</a>
      <a className="clicked" href="">Recette d'hiver</a>
      <form action="POST">
      <Input icon={<Icon name='search' inverted circular link />}placeholder='Rechercher...'/>
      </form>
    </nav>
    <div className="hiver-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="hiver-card">
        <h3 className="hiver-title">Recette d'hiver 1</h3>
        <img className="hiver-img" src="https://previews.123rf.com/images/foodandmore/foodandmore1609/foodandmore160900128/62635343-gourmet-d%C3%AEner-fondue-suisse-un-soir-d-hiver-avec-assortiment-de-fromages-sur-une-planche-%C3%A0-c%C3%B4t%C3%A9-d-un.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        
        <a className="hiver-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="hiver-card">
        <h3 className="hiver-title">Recette d'hiver 2</h3>
        <img className="hiver-img" src="https://previews.123rf.com/images/foodandmore/foodandmore1609/foodandmore160900128/62635343-gourmet-d%C3%AEner-fondue-suisse-un-soir-d-hiver-avec-assortiment-de-fromages-sur-une-planche-%C3%A0-c%C3%B4t%C3%A9-d-un.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="hiver-read-more" href="">En savoir plus</a>
      </article>
      <article className="hiver-card">
        <h3 className="hiver-title">Recette d'hiver 3</h3>
        <img className="hiver-img" src="https://previews.123rf.com/images/foodandmore/foodandmore1609/foodandmore160900128/62635343-gourmet-d%C3%AEner-fondue-suisse-un-soir-d-hiver-avec-assortiment-de-fromages-sur-une-planche-%C3%A0-c%C3%B4t%C3%A9-d-un.jpg" alt=""/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a className="hiver-read-more" href="">En savoir plus</a>
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

export default Hiver;
