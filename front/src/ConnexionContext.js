import React, {useState, createContext} from 'react'

export const ConnexionContext = createContext() 

export const ConnexionProvider = (props) => {
    const [ token, setToken ] = useState(localStorage.getItem('tokenStored')) 

    return(
      <ConnexionContext.Provider value={[token, setToken]}>
        {props.children}
      </ConnexionContext.Provider>
  )
}
