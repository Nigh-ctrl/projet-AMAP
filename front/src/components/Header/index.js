
import React from "react"
import './style.scss';
import logo from "../../../public/logos/round.png"

const Header =  () =>{

  return(
    <header>
        <div className="left">
                <img src={logo}/>
        </div>
        <div className="center">
            <span>Amap la Seyne sur Mer</span>
        </div>
        <div className="right">
            <a>contact</a>
            <a>accueil</a>
        </div>
        <div className="burger">
          <div className="bar-1"/>
          <div className="bar-2"/>
          <div className="bar-3"/>
        </div> 
    </header>
  );
}

export default Header;
