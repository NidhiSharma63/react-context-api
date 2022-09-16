import React,{useContext} from 'react';
import { store } from '../context/store';

const SingleProduct = () => {
  const {productArray} = useContext(store);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct;