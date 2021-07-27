// == Import npm
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
// == styles
import './styles.scss'
// == Import
import Header from '../Header'
import Contact from '../Contact'
import Accueil from '../Accueil'
import Footer from '../Footer'
import Producteurs from '../Producteurs'
import Articles from '../Articles'
import Recettes from '../Recettes';
import Connexion from '../Connexion'
import Presentation from '../Presentation'
import Recette from '../Recettes/Recette'
import Evenements from '../Articles/Evenements'

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header/>
      <Route path="/" exact component={Accueil}/>
      <Route path="/presentation" exact component={Presentation} />
      <Route path="/contact" exact component={Contact}/>
      <Route path="/producteurs" exact component={Producteurs}/>
      <Route path="/articles" exact component={Articles}/>
      <Route path="/article/:id" exact component={Evenements}/>
      <Route path="/recettes" exact component={Recettes}/>
      <Route path="/recette/:id" exact component={Recette}/>
      <Route path="/login" exact component={Connexion}/>
      <Footer/>
    </BrowserRouter>
  </div>
);

// == Export
export default App;
