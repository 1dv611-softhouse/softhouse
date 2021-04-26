import React, { useState, createContext } from "react";

export const CurrentCardContext = createContext();

export const CurrentCardProvider = (props) => {
  const [currentCard, setCurrentCard] = useState({});
  return (
    <CurrentCardContext.Provider value={{ currentCard, setCurrentCard }}>
      {props.children}
    </CurrentCardContext.Provider>
  );
};
