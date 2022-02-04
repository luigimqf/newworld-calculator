import React, { createContext, useState } from 'react'

export const IconContext = createContext(null)

export function ItemIconProvider({children}){

  const [currentItem, setCurrentItem] = useState(null)


  return(
    <IconContext.Provider value={{currentItem,setCurrentItem}}>
      {children}
    </IconContext.Provider>
  )
}