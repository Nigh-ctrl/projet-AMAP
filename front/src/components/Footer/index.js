
import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom'

const Footer =  () => (
  <footer>
    <Link to="/mentions">
      <div className='center'>mentions légales</div>
    </Link>
    <Link to="/login">
      <div className='right'>connexion</div>
    </Link>
  </footer>
);


export default Footer;
