
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
        <div onClick={() => toggleBurger(!isActive)} className={isActive ? "burger active" : "burger"} >
          <div className="bar-1"/>
          <div className="bar-2"/>
          <div className="bar-3"/>
        </div> 
    </header>
  );
}

export default Header;
