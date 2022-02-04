import React, { createContext, useState } from "react";

export const DisplayContext = createContext(null)

export function DisplayProvider({children}){

  const [newDisplay, setNewDisplay] = useState({
    color:'#131313',
    background:'#ecf0f1',
    border:'#9F957E'
  })

  return(
    <DisplayContext.Provider value={{newDisplay, setNewDisplay}}>
      {children}
    </DisplayContext.Provider>
  )
}