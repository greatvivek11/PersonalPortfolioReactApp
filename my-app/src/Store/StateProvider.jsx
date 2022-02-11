import React from 'react'
import {useGlobalState} from './GlobalState';
import {Context} from "./Context";

export const StateProvider = ({ children }) => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}