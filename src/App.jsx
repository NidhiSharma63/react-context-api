import React from 'react';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      {/* <CartPage/> */}
      <ProductPage/>
    </div>
  )
}

export default App;