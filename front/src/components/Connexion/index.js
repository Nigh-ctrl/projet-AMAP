import React, {useState, useContext} from 'react';
import './styles.scss'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import {ConnexionContext} from '../../ConnexionContext'

const Connexion = () => {
  const [token, setToken] = useContext(ConnexionContext) 
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit (event) {
      // annule le refresh de la page
      event.preventDefault()
      const token = email + password
      //requete axios
      axios({
        method: 'post',
        url: `${axios.default.baseURL}/login`,
        data: {
          email: email,
          password: password
        }
      }, { headers: {'Authorization': `Bearer ${token}`}} )
      .then((res) => {
        console.log(res.data)
        setToken(res.data.token)
        localStorage.setItem('tokenStored', res.data.token)
      })
      .catch((e) => {
        console.log("erreur lors du login", e);
      })
  }
  
  
  if(token) return <Redirect to="/"  />

  return (
    <section className="connexion">
      <div className="admin-login">
        <h1>Connexion</h1>
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-login-email">
            <input
              type="text"
              placeholder="Adresse mail"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="admin-login-password">
            <input
              type="password"
              placeholder="Mot de passe"
              autoComplete="current_password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
               />
          </div>
          <div className="admin-login-submit">
              <button  type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Connexion;
