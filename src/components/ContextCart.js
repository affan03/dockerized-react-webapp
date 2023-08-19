import React, {useContext, useState} from 'react'
import Items from './Items';
import { products } from './products';
import {CartContext} from './Cart';

const ContextCart = () => {
    

  const {item, clearCart} = useContext(CartContext)
  return (
    <>
        <header>
            <div className="continue-shopping">
                <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                <h3>Continue shopping</h3>
                
            </div>

            <div className='cart-icon'>
                  <img src='./images/cart.png' alt='cart' />
                  <p>7</p>
                </div>
        </header>

        <section className='main-cart-section'>
          <h1>shopping cart</h1>
          <p className='total-items'>you have <span className='total-items-count'>7</span> times in shopping cart</p>

          <div className='cart-items'>
              <div className='cart-items-container'>
                 {
                     item.map((curItem) => {
                         return <Items key={curItem.id} {... curItem}/>
                     })
                 } 
                        
              </div>
          </div>

          <div className='card-total'>
            <h3>Cart Total : <span>2200rs</span></h3>
            <button>Checkout</button>
            <br />
            <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
          </div>
        </section>
    </>
  )
}

export default ContextCart