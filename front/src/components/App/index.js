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
import Annonces from '../Articles/Annonces'
import Evenements from '../Articles/Evenements'
import Nutrition from '../Articles/Nutrition'
import Paniers from '../Articles/Paniers'
import Connexion from '../Connexion'
// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Accueil />
    <Footer/>
  </div>
);

// == Export
export default App;
