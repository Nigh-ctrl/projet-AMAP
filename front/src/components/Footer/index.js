
import React, { useContext } from 'react';
import './style.scss';
import {Link} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'


function Footer () {

  const [token, setToken] = useContext(ConnexionContext)

  function logout (){
    setToken(undefined)
    alert("vous êtes déconnecté")
  }


  
  if(token){
    return(
   <footer>
     <Link to="/mentions-legales">
       <div className='center'>mentions légales</div>
     </Link>
     <Link to="/">
       <div className='right' onClick={logout} >deconnexion</div>
     </Link>
   </footer>
    )
  }


  return (
   <footer>
     <Link to="/mentions-legales">
       <div className='center'>mentions légales</div>
     </Link>
     <Link to="/login">
       <div className='right'>connexion</div>
     </Link>
   </footer>
  );
}


export default Footer;
