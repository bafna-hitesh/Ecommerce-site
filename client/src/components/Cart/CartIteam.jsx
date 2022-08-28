import React from 'react';
import MoveToWishListButton from '../Buttons/MoveToWishListButton';
import RemoveCartItemButton from '../Buttons/RemoveCartItemButton';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const CartIteam = ({product, quantity}) => {
   const { dispatch } = useData();
  //  const { image, name, brand, price, _id } = product;

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INCREASE_QUANTITY', payload: product });
   };
   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DECREASE_QUANTITY', payload: product });
   };
  return (
    <>
        <div className='cart-item'>
          <figure className='cart-item-figure'>
            <img
              className='cart-image'
              alt=''
              src= {product?.image}
            />
          </figure>
          <div className='cart-item-details'>
            <Link to={`/product/${product?._id}`} className='cart-item-title' >
              {product?.name}
            </Link>
            <div className='cart-item-brand'>Brand - {product?.brand}</div>
            <div className='cart-item-quantity'>
              <button
                 onClick={() => handleDecrementQty(product?.product)}
                 disabled={product?.quantity <= 1}
                className='btn btn-square cart-item-quantity-dec'
              >
                -
              </button>
              <span className='cart-item-qty'>{quantity}</span>
              <button
                 onClick={() => handleIncrementQty(product?.product)}
                className='btn cart-item-quantity-inc'
              >
                +
              </button>
            </div>
            <div className='cart-item-btns cart-item-btns-md'>
              <RemoveCartItemButton product={product}/>
              <MoveToWishListButton product={product}/>
            </div>
          </div>
          <div className='cart-item-subtotal'>
            ₹<span>{(quantity * product?.price).toLocaleString()}</span>
          </div>
        </div>
      
    </>
  );
};

export default CartIteam;

/* 
    

*/
