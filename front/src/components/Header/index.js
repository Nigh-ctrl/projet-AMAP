import React from 'react';
import propTypes from 'prop-types';
import './style.scss';
import logo from "../../../public/logos/round.png"

const Header =  () => (
    <header>
        <div className="left">
            <span>Amap la Seyne sur Mer</span>
        </div>
        <div className="center">
                <img src={logo}/>
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

Header.propTypes = {
    
};

Header.defaultProps = {
    
};

export default Header;
