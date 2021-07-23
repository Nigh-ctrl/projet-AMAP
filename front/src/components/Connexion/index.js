import React, {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios'

import './styles.scss'

const Connexion = () => {

  const [logged, setLogged] = useState(false)

  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit (event) {
      // annule le refresh de la page
      event.preventDefault()
      const token = email + password
      //requete axios
      axios({
        method: 'post',
        url: 'http://localhost:4000/login',
        data: {
          email: email,
          password: password
        }
      }, { headers: {'Authorization': `Bearer ${token}`}} )
      .then((res) => {
        console.log(res.data);
        setLogged = true
      })
      .catch((e) => {
        console.log("erreur lors du login", e);
      })
  }

  return (
    <section className="connexion">
      <div className="admin-login">
        <h1>Connexion</h1>
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-login-email">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              labelPosition='right'
            />
          </div>
          <div className="admin-login-password">
            <Input icon='lock'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
               />
          </div>
          <div className="admin-login-submit">
              <Button  type="submit">Se connecter</Button>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Connexion;
