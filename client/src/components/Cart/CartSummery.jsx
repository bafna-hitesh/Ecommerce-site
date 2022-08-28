import React from 'react';
import { useData } from '../../context/DataContext';

const getAmount = (items) => {
  return items.reduce((acc, item) => {
     return acc + Number(item.product.price) * item.quantity;
  }, 0);
};

const CartSummery = () => {
  const { state } = useData();
  const { cart } = state;

  return (
    <>
      <div className='cart-summary-container'>
      <div className='heading'>PRICE DETAILS: ({cart.length} items)</div>
      <div className='row'>
        <div className='price-label'>Total MRP</div>
        <div className='price text-right'>₹{getAmount(cart).toFixed(2)}</div>
      </div>
      <div className='row'>
        <div className='price-label'>Discount on MRP</div>
        <div className='price text-right text-green'>₹367.01</div>
      </div>
      <div className='row'>
        <div className='price-label'>Convenience Fee</div>
        <span className='text-strike-through'>₹99</span>
        <span className='text-green'>FREE</span>
        <div className='price text-right'></div>
      </div>
      <div className='row text-regular-weight body-cp-rg'>
        <div className='price-label'>Total Amount</div>
        <div className='price text-right'>₹{getAmount(cart).toFixed(2)}</div>
      </div>
      <button className='btn btn-solid-primary '>Place Order</button>
    </div>
    </>
  );
};

export default CartSummery;
