import React from 'react';
import { createContext } from "react";

export const context = createContext();

const newContext = ({children}) => {
  const state  = {
    "name":'nidhi',
    "class":12
  }
  return (
    <context.Provider value={{state}}>
      {children}
    </context.Provider>
  )
}

export default newContext;