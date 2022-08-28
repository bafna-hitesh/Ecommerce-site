import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleMoveItemToWishlist } from '../../utils/serverRequest';

const MoveToWishListButton = ({ product }) => {
  const { state, dispatch } = useData();
  const {
     authState: { token },
  } = useAuth();

  const notify = (message) => toast.success(message);
  return (
    <>
      <button 
          onClick={() => {
            handleMoveItemToWishlist({
               state,
               dispatch,
               product,
               notify,
               token,
            });
         }}
          className='cart-item-btn' style={{border: 'none'}}>
            Move to Wishlist
      </button>
    </>
  )
};

export default MoveToWishListButton;
