import React, { useState, createContext } from 'react'

export const VelocityContext = createContext()

export const VelocityProvider = (props) => {
  const [currentVelocity, setCurrentVelocity] = useState(10)
  return (
    <VelocityContext.Provider value={{ currentVelocity, setCurrentVelocity }}>
      {props.children}
    </VelocityContext.Provider>
  )
}
