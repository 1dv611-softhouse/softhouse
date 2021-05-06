import React, { useState, createContext } from 'react'

export const StorypointsContext = createContext()

export const StorypointsProvider = (props) => {
  const [currentStorypoints, setCurrentStorypoints] = useState(4000)
  return (
    <StorypointsContext.Provider value={{ currentStorypoints, setCurrentStorypoints }}>
      {props.children}
    </StorypointsContext.Provider>
  )
}
