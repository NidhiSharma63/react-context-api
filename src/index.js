import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewContext from './context/NewContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewContext>
      <App />
    </NewContext>
  </React.StrictMode>
);