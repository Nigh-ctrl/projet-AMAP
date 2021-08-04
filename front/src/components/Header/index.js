
import React, { useState } from "react"
import './style.scss';
import logo from "../../../public/logos/round.png"
import {Link} from "react-router-dom"

const Header =  () =>{
  const [isActive, toggleBurger] = useState(true)
  console.log(isActive)
  return(
    <header>
        <div className="left">
                <img src={logo}/>
        </div>
        <div className="center">
            <span>Amap la Seyne sur Mer</span>
        </div>
        <div className="right">
          <Link to="/" > 
            <p>accueil</p>
          </Link>
          <Link to="/contact">
            <p>contact</p>
          </Link>
        </div>
        <div onTouchEnd={() => toggleBurger(!isActive)} className={isActive ? "burger active" : "burger"} >
          <span className="bar-1"/>
          <span className="bar-2"/>
          <span className="bar-3"/>
        </div> 
        <div className={isActive ? "panel active" : "panel"}>
          
          <Link to="/" > 
            <p>accueil</p>
          </Link>
          <Link to="/contact">
            <p>contact</p>
          </Link>
           <Link to="/mentions-legales">
             <p>Mentions légales</p>
           </Link>
           <Link to="/login">
             <p>Connexion</p>
           </Link>
        </div> 
    </header>
  );
}

export default Header;
