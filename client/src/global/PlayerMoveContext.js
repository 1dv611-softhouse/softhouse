import React, { useState, createContext } from 'react'

export const PlayerMoveContext = createContext()

export const PlayerMoveProvider = (props) => {
  const [currentPlayerMove, setPlayerMove] = useState({})
  return (
    <PlayerMoveContext.Provider value={{ currentPlayerMove, setPlayerMove }}>
      {props.children}
    </PlayerMoveContext.Provider>
  )
}
