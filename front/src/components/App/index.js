// == Import npm
import React from 'react';
// == styles
import './styles.scss'
// == Import
import Header from '../Header'
import Accueil from '../Accueil'
import Footer from '../Footer'
import Agriculteurs from '../Agriculteurs'
import Articles from '../Articles'
import Recettes from '../Recettes';
// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Recettes />
    <Footer/>
  </div>
);

// == Export
export default App;
