import React,{useContext,useEffect} from 'react';
import { store } from '../context/store';

const SingleProduct = () => {
  const {productArray,setCart,cart} = useContext(store);

  const setToCart = (product) =>{
    product.isAddedToCart = true;
    setCart([...cart,product])

    // console.log(cart)

    // FIXME // TODO IF I DO CONSOLE.LOG(cart) HERE THEN I 
    // WILL NOT GET THE UPDATED OBJ IN CART BECAUSE IT RE-RENDER THE COMP.
    // AND THE INITIALLY CART HAS EMPTY VALUE SO IF WHEN USER SECOND TIME CLICK
    // IT WILL SHOW THE UPDATED OBJ IF I TRY IT OUTSIDE THEN IT WILL BEHAVE AS EXPECTED
  };


  const removeFromCart = (product) =>{
    product.isAddedToCart = false;
    setCart((cart)=>(
      cart.filter((c)=>(
        c.id!==product.id
      ))
    ))
  }

  return (
    <>
      {
      productArray.map((product)=>(
        <div key={product.id}>
          <img src={product.image} alt="product"/>
          <div><h3>{product.name}</h3><h4>{product.price}</h4></div>
          <h1>{product.id}</h1>
          {product.isAddedToCart?
          <button onClick={()=>{removeFromCart(product)}}>Remove from cart</button>
          :<button onClick={()=>{setToCart(product)}}>Add to cart</button>}
        </div>
      ))
      }
    </>
  )
}

export default SingleProduct;