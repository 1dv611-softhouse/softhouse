import React, { useState, createContext } from 'react'

export const RetrospectiveContext = createContext()

export const RetrospectiveProvider = (props) => {
  const [retrospective, setRetrospective] = useState({
    state: false,
    level: 1
  })
  return (
    <RetrospectiveContext.Provider value={{ retrospective, setRetrospective }}>
      {props.children}
    </RetrospectiveContext.Provider>
  )
}
