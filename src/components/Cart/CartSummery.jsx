import React from 'react';

const CartSummery = () => {
  return (
    <div class='cart-summary-container'>
      <div class='heading'>PRICE DETAILS: (1 items)</div>
      <div class='row'>
        <div class='price-label'>Total MRP</div>
        <div class='price text-right'>₹749.00</div>
      </div>
      <div class='row'>
        <div class='price-label'>Discount on MRP</div>
        <div class='price text-right text-green'>₹367.01</div>
      </div>
      <div class='row'>
        <div class='price-label'>Convenience Fee</div>
        <span class='text-strike-through'>₹99</span>
        <span class='text-green'>FREE</span>
        <div class='price text-right'></div>
      </div>
      <div class='row text-regular-weight body-cp-rg'>
        <div class='price-label'>Total Amount</div>
        <div class='price text-right'>₹381.99</div>
      </div>
      <button class='btn btn-solid-primary '>Place Order</button>
    </div>
  );
};

export default CartSummery;
