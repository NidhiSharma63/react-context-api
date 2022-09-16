import React,{useContext} from 'react';
import { store } from '../context/store';
import SingleProduct from './SingleProduct';

const CartPage = () => {
  const {cart} = useContext(store);

  return (
    <div>
      {
        cart.map((product)=>(
          <SingleProduct key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default CartPage;