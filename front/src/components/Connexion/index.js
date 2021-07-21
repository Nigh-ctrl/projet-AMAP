import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Dropdown, Button, Input } from 'semantic-ui-react';

import './styles.scss'

const Connexion = () => {
  const options = [
    { key: '.com', text: '.com', value: '.com' },
    { key: '.fr', text: '.fr', value: '.fr' },
  ]
  
  return (
    <section className="connexion">
      <div className="admin-login">
        <h1>Connexion</h1>
        <form className="admin-login-form" action="GET">
          <div className="admin-login-email">
            <Input
              label={<Dropdown defaultValue='.fr' options={options} />}
              labelPosition='right'
              placeholder='Ex: CamLag@'
            />
          </div>
          <div className="admin-login-password">
            <Input icon='lock' placeholder='****' />
          </div>
          <div className="admin-login-submit">
            <Button>Se connecter</Button>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Connexion;
