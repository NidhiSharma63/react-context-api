import React, { useState } from 'react';
import { createContext } from "react";
import { faker } from '@faker-js/faker';

faker.seed(123);


const productArray = [...Array(30)].map(()=>({
  id:faker.datatype.uuid(),
  Name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.transport(),
  isAddedToCart:false,
}));

export const store = createContext();
const StoreComponent = ({children}) => {

  

  const [cart,setCart] = useState([]);

  return (
    <store.Provider value={{productArray,cart,setCart}}>
      {children}
    </store.Provider>
  )
}

export default StoreComponent;