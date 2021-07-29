// == Import npm
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
// == import store
import {ConnexionProvider} from '../../ConnexionContext'
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
import Article from '../Articles/Article'

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
    <ConnexionProvider>
      <Header/>
      <Route path="/" exact component={Accueil}/>
      <Route path="/presentation" exact component={Presentation} />
      <Route path="/contact" exact component={Contact}/>
      <Route path="/producteurs" exact component={Producteurs}/>
      <Route path="/articles" exact component={Articles}/>
      <Route path="/article/:id" exact component={Article}/>
        <Route path="/article/:id/edit" exact component{Edit}/>
      <Route path="/articles/:category" exact component={Articles}/>
      <Route path="/recettes" exact component={Recettes}/>
      <Route path="/recette/:id" exact component={Recette}/>
      <Route path="/recettes/saison/:saison" exact component={Recettes}/>
      <Route path="/login" exact component={Connexion}/>
      <Footer/>
    </ConnexionProvider>
    </BrowserRouter>
  </div>
);

// == Export
export default App;
