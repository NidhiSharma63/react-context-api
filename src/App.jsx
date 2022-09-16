import React from 'react';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductPage/>} exact />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App;