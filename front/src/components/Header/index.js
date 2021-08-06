
import React, { useEffect, useState, useContext } from "react"
import './style.scss';
import logo from "../../../public/logos/round.png"
import {Link} from "react-router-dom"
import {ConnexionContext} from '../../ConnexionContext.js'

const Header =  () =>{
  const [isActive, toggleBurger] = useState(false)
  const hidePanel = () =>{
    toggleBurger(!isActive)
  }
  const [token, setToken] = useContext(ConnexionContext)

  const logout = () =>{
    setToken(undefined)
    localStorage.clear('tokenStored')
    hidePanel()
    alert("vous êtes déconnecté")
  }

  if(token){
    return(
    <header>
        <div className="left">
                <img src={logo}/>
        </div>
        <div className="center">
            <span>Amap la Seyne-sur-Mer</span>
        </div>
        <div className="right">
          <Link to="/" > 
            <p>Accueil</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div onTouchEnd={() => toggleBurger(!isActive)} className={isActive ? "burger active" : "burger"} >
          <span className="bar-1"/>
          <span className="bar-2"/>
          <span className="bar-3"/>
        </div> 
        <div className={isActive ? "panel active" : "panel"}>
          
          <Link to="/" onTouchEnd={hidePanel} > 
            Accueil
          </Link>
          <Link to="/contact"onTouchEnd={hidePanel} >
            Contact
          </Link>
           <Link to="/mentions-legales"onTouchEnd={hidePanel} >
             Mentions légales
           </Link>
           <Link to="/" onTouchEnd={logout} >
            Deconnexion
           </Link>
        </div> 
    </header>
    )
  }

  return(
    <header>
        <div className="left">
                <img src={logo}/>
        </div>
        <div className="center">
            <span>Amap la Seyne-sur-Mer</span>
        </div>
        <div className="right">
          <Link to="/" > 
            <p>Accueil</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div onTouchEnd={() => toggleBurger(!isActive)} className={isActive ? "burger active" : "burger"} >
          <span className="bar-1"/>
          <span className="bar-2"/>
          <span className="bar-3"/>
        </div> 
        <div className={isActive ? "panel active" : "panel"}>
          
          <Link to="/" onTouchEnd={hidePanel} > 
            Accueil
          </Link>
          <Link to="/contact"onTouchEnd={hidePanel} >
            Contact
          </Link>
           <Link to="/mentions-legales"onTouchEnd={hidePanel} >
             Mentions légales
           </Link>
           <Link to="/login" onTouchEnd={hidePanel} >
            Connexion
           </Link>
        </div> 
    </header>
  );
}

export default Header;
