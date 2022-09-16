import React, { useContext } from 'react';
import {context} from './context/NewContext';

const App = () => {
  const {state} = useContext(context);
  return (
    <h1>this is a context created by {state.name}</h1>
  )
}

export default App;