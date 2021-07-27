import React, {useState, createContext} from 'react'

export const ConnexionContext = createContext() 

export const ConnexionProvider = (props) => {
    const [ token, setToken ] = useState() 

    return(
      <ConnexionContext.Provider value={[token, setToken]}>
        {props.children}
      </ConnexionContext.Provider>
  )
}
