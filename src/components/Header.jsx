import React,{ useContext } from 'react';
import { store } from '../context/store';

const Header = () => {
  const {cart} = useContext(store);
  return (
    <div>
      <h1>Ecommerce</h1>
      <ul>
        <li>Home</li>
        <li>Cart <span>{cart.length}</span></li>
      </ul>
    </div>
  )
}

export default Header;