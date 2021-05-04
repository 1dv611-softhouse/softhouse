import React, { useState, createContext } from 'react'

export const TileContext = createContext()

export const TileProvider = (props) => {
  const [currentTile, setCurrentTile] = useState({})
  return (
    <TileContext.Provider value={{ currentTile, setCurrentTile }}>
      {props.children}
    </TileContext.Provider>
  )
}
