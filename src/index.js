import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreComponent from './context/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreComponent>
      <App />
    </StoreComponent>
  </React.StrictMode>
);