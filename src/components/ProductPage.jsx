import React,{ useContext } from 'react';
import SingleProduct from './SingleProduct';
import { store } from '../context/store';


const ProductPage = () => {
  const {productArray,setCart,cart} = useContext(store);

  return (
    <div>
      {
      productArray.map((product)=>(
        <SingleProduct key={product.id} product = {product}/>
        // <div key={product.id}>
        //   <img src={product.image} alt="product"/>
        //   <div><h3>{product.name}</h3><h4>{product.price}</h4></div>
        //   <h1>{product.id}</h1>
        //   {product.isAddedToCart?
        //   <button onClick={()=>{removeFromCart(product)}}>Remove from cart</button>
        //   :<button onClick={()=>{setToCart(product)}}>Add to cart</button>}
        // </div>
      ))
      }
      
    </div>
  )
}

export default ProductPage;