import React, { useState, createContext } from 'react'

export const UsernameContext = createContext()

export const UsernameProvider = (props) => {
  const [username, setCurrentUsername] = useState('Guest')
  return (
    <UsernameContext.Provider value={{ username, setCurrentUsername }}>
      {props.children}
    </UsernameContext.Provider>
  )
}
