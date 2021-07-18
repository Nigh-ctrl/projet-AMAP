import React from 'react';
import propTypes from 'prop-types';
import './style.scss';
import logo from "../../../public/logos/round.png"

const Header =  () => (
    <header>
        <div className="left">
            <p>Amap la Seyne sur Mer</p>
        </div>
                <img src={logo}/>
        <div className="right">
            <a>contact</a>
            <a>accueil</a>
        </div>
    </header>
);

Header.propTypes = {
    
};

Header.defaultProps = {
    
};

export default Header;
