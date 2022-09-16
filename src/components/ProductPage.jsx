import React,{ useContext } from 'react';
import SingleProduct from './SingleProduct';

import { store } from '../context/store';

const ProductPage = () => {
  const {productArray} = useContext(store);
  console.log(productArray)

  return (
    <div>
      
    </div>
  )
}

export default ProductPage;