import React, { useState, createContext } from 'react'

export const PlayerPositionContext = createContext()

export const PlayerPositionProvider = (props) => {
  const [currentPositionValue, setCurrentPositionValue] = useState(1)
  return (
    <PlayerPositionContext.Provider
      value={{ currentPositionValue, setCurrentPositionValue }}
    >
      {props.children}
    </PlayerPositionContext.Provider>
  )
}
