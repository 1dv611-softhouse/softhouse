import React, { useState, createContext } from 'react'

export const DaysContext = createContext()

export const DaysProvider = (props) => {
  const [days, setDays] = useState([])
  return (
    <DaysContext.Provider value={{ days, setDays }}>
      {props.children}
    </DaysContext.Provider>
  )
}
