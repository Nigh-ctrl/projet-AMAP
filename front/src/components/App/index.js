// == Import npm
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
// == import store
import {ConnexionProvider} from '../../ConnexionContext'
// == styles
import './styles.scss'
// == Import
import Header from '../Header'
import Contact from '../Contact'
import MentionsLegales from '../MentionsLegales'
import Accueil from '../Accueil'
import Footer from '../Footer'
import Producteurs from '../Producteurs'
import Producteur from '../Producteurs/Producteur'
import Articles from '../Articles'
import Recettes from '../Recettes';
import Connexion from '../Connexion'
import Presentation from '../Presentation'
import Recette from '../Recettes/Recette'
import Article from '../Articles/Article'
import EditRecette from '../EditRecette'
import EditArticle from '../EditArticle'
import EditProducteur from '../EditProducteur'
import AddRecette from '../AddRecette'
import AddArticle from '../AddArticle' 

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
    <ConnexionProvider>
        <Header/>
        <Switch >
        <Route path="/" exact component={Accueil}/>
        <Route path="/presentation" exact component={Presentation} />
        <Route path="/contact" exact component={Contact}/>
        <Route path="/mentions-legales" exact component={MentionsLegales}/>
        <Route path="/producteurs" exact component={Producteurs}/>
        <Route path="/producteurs/:id_producteur" exact component={Producteur}/>
        <Route path="/producteurs/:id_producteur/edit" exact component={EditProducteur} />
        <Route path="/producteurs/:produits" exact component={Producteurs}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/articles/add" exact component={AddArticle}/>
        <Route path="/articles/:id" exact component={Article}/>
        <Route path="/articles/:id/edit" exact component={EditArticle} />
        <Route path="/articles/:category" exact component={Articles}/>
        <Route path="/recettes" exact component={Recettes}/>
        <Route path="/recettes/add" exact component={AddRecette} />
        <Route path="/recettes/:id" exact component={Recette}/>
        <Route path="/recettes/:id/edit" exact component={EditRecette}/>
        <Route path="/recettes/saison/:saison" exact component={Recettes}/>
        <Route path="/login" exact component={Connexion}/>
        </Switch>
        <Footer/>
    </ConnexionProvider>
    </BrowserRouter>
  </div>
);

// == Export
export default App;
