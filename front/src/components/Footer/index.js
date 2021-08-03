
import React, { useContext } from 'react';
import './style.scss';
import {Link} from 'react-router-dom'
import {ConnexionContext} from '../../ConnexionContext'


function Footer () {

  const [token, setToken] = useContext(ConnexionContext)

  function logout (){
    setToken(undefined)
    localStorage.clear('tokenStored')
    alert("vous êtes déconnecté")
  }


  
  if(token){
    return(
   <footer>
     <Link to="/mentions-legales">
       <div className='center'>Mentions légales</div>
     </Link>
     <Link to="/">
       <div className='right' onClick={logout} >Deconnexion</div>
     </Link>
   </footer>
    )
  }


  return (
   <footer>
     <Link to="/mentions-legales">
       <div className='center'>Mentions légales</div>
     </Link>
     <Link to="/login">
       <div className='right'>Connexion</div>
     </Link>
   </footer>
  );
}


export default Footer;
