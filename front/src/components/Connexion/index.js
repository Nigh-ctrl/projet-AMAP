import React, {useState, useEffect} from 'react';
import './styles.scss'
import axios from 'axios'

const Connexion = () => {

  const [logged, setLogged] = useState(false)

 const [email, setEmail ] = useState("");
 const [password, setPassword] = useState("");
 
 
  function handleSubmit (event) {
    event.preventDefault()
    const token = email + password
    console.log("event")
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
      setPassword(res.data.password);
      setEmail(res.data.email);
      setLogged(true)
      if(logged){
        return(
          <Redirect to="/" />
          )
        };
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
              placeholder='Ex: CamLag@'
            />
          </div>
          <div className="admin-login-password">
            <Input icon='lock'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
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
