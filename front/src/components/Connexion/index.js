import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Dropdown, Button, Input } from 'semantic-ui-react';
import './styles.scss'
import axios from 'axios'

const Connexion = () => {
 const [email, setEmail ] = useState();
 const [password, setPassword] = useState();

 function handleSubmit(event){
   event.preventDefault()
   console.log(event)
   console.log(email, password)
   //TODO requete axios, envoyer les vals dans le body,
   //.then()catch()
   //axios.get('EndpointWithAuthorizedError')
    //.then((response) => {})
    //.catch((error) => {
    //  console.log(error);
   // })
  }

  return (
    <section className="connexion">
      <div className="admin-login">
        <h1>Connexion</h1>
        <form className="admin-login-form" onSubmit={handleSubmit} >
          <div className="admin-login-email">
            <Input

              onChange={(event) => setEmail(event.target.value)}
              value={email}
              labelPosition='right'
              placeholder='Ex: CamLag@'
            />
          </div>
          <div className="admin-login-password">
            <Input icon='lock'
              onChange={(event)=> setPassword(event.target.value)}
              placeholder='****' />
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
