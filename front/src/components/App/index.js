// == Import npm
import React from 'react';
// == styles
import './styles.scss'
// == Import
import Header from '../Header'
import Contact from '../Contact'
import Accueil from '../Accueil'
import Footer from '../Footer'
import Agriculteurs from '../Agriculteurs'
import Articles from '../Articles'
import Recettes from '../Recettes';
import Annonces from '../Articles/Annonces';
import Evenements from '../Articles/Evenements';
import Printemps from '../Recettes/Printemps'
import Automne from '../Recettes/Automne';
import Ete from '../Recettes/Ete';
import Hiver from '../Recettes/Hiver';
import Agriculteur from '../Agriculteurs/Agriculteur';
import Recette from '../Recettes/Recette';




// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Accueil/>
    <Footer/>
  </div>
);

// == Export
export default App;
