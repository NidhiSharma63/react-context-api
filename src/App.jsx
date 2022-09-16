import React from 'react';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <ProductPage/>
      <CartPage/>
      <Header/>
    </div>
  )
}

export default App;