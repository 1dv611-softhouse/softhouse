import React, { useState, createContext } from 'react'

export const VelocityListContext = createContext()

export const VelocityListProvider = (props) => {
  const [velocityList, addToVelovityList] = useState([])
  return (
    <VelocityListContext.Provider value={{ velocityList, addToVelovityList }}>
      {props.children}
    </VelocityListContext.Provider>
  )
}
