import React, { createContext, useReducer, useState } from 'react'
import './cart.css'
import { products } from './products';
import ContextCart from './ContextCart';
import {reducer} from './reducer';


export const CartContext = createContext();

const initialState ={
  item: products,
  totalAmount: 0,
  totalItems: 0,
}

const Cart = () => {

 // const [item, setItem] = useState(products);
  const[state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    })
  }

  // clear the cart

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  }

  // Increment the item

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id
    });
  }

  // Decrement the item 

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id
    });
  }

  return (
    <>
        <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
           <ContextCart />
        </CartContext.Provider>
      
    </>
  )
}

export default Cart