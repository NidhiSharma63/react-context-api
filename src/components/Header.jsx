import React,{ useContext } from 'react';
import { store } from '../context/store';
import { Link } from 'react-router-dom';


const Header = () => {
  const {cart} = useContext(store);
  return (
    <div>
      <h1>Ecommerce</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart <span>{cart.length}</span></Link>
      </ul>
    </div>
  )
}

export default Header;