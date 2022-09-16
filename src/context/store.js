import React, { useState } from 'react';
import { createContext } from "react";
import { faker } from '@faker-js/faker';

faker.seed(123);

export const store = createContext();
const StoreComponent = ({children}) => {

  const productArray = [...Array(30)].map(()=>({
    id:faker.datatype.uuid(),
    Name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.commerce.product(),
    image1: faker.image.transport()
  }));

  const [cart,setCart] = useState([])

  return (
    <store.Provider value={{productArray,cart,setCart}}>
      {children}
    </store.Provider>
  )
}

export default StoreComponent;