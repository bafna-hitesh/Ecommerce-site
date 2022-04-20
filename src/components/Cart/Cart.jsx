import React from 'react';
import MoveToWishListButton from '../Buttons/MoveToWishListButton';
import RemoveCartItemButton from '../Buttons/RemoveCartItemButton';
import './cart.css';
import CartSummery from './CartSummery';

const Cart = () => {
  return (
    <>
      <h1 class='cart-header'>My Cart</h1>
      <div className='cart-section'>
        <div className='cart-item'>
          <figure className='cart-item-figure'>
            <img
              className='cart-image'
              alt=''
              src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            />
          </figure>
          <div className='cart-item-details'>
            <div className='cart-item-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className='cart-item-brand'>Brand - PUMA</div>
            <div className='cart-item-quantity'>
              <button
                //  onClick={() => handleDecrementQty(product)}
                //  disabled={quantity < 1}
                className='btn btn-square cart-item-quantity-dec'
              >
                -
              </button>
              <span className='cart-item-qty'>1</span>
              <button
                //  onClick={() => handleIncrementQty(product)}
                className='btn cart-item-quantity-inc'
              >
                +
              </button>
            </div>
            <div className='cart-item-btns cart-item-btns-md'>
              <RemoveCartItemButton />
              <MoveToWishListButton />
            </div>
          </div>
          <div className='cart-item-subtotal'>
            ₹<span>1032</span>
          </div>
          <div className='cart-item-btns cart-item-btns-sm'>
            {/* <MoveToWishListButton product={product} />
               <RemoveCartItemButton product={product} /> */}
          </div>
        </div>
        <CartSummery />
      </div>
    </>
  );
};

export default Cart;

/* 
    

*/
