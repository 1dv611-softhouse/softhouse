import React, { useState, createContext } from 'react'

export const HasAnsweredContext = createContext()

export const HasAnsweredProvider = (props) => {
  const [hasAnswered, setHasAnswered] = useState(true)
  return (
    <HasAnsweredContext.Provider value={{ hasAnswered, setHasAnswered }}>
      {props.children}
    </HasAnsweredContext.Provider>
  )
}
