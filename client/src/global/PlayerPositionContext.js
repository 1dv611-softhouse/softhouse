import React, { useState, createContext } from "react";

export const PlayerPositionContext = createContext();

export const PlayerPositionProvider = (props) => {
  const [currentPositionValue, setCurrentPositionValue] = useState(1);
  if (currentPositionValue > 22) {
    const newValue = currentPositionValue - 22;
    setCurrentPositionValue(newValue);
  }
  return (
    <PlayerPositionContext.Provider
      value={{ currentPositionValue, setCurrentPositionValue }}
    >
      {props.children}
    </PlayerPositionContext.Provider>
  );
};
