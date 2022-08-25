import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { checkItem } from '../../utils/utils';
import { handleAddToCartItem } from '../../utils/serverRequest';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const AddToCartButton = ({ product }) => {
    const navigate = useNavigate();
   const { state, dispatch } = useData();

   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   const handleAddItemError = () => {
      toast.error('Please Login to Add Item');
      navigate('/login');
   };
   // console.log(token);
  return (
    <>
    <button 
        onClick={() => {
            token
               ? checkItem(state?.cart, product)
                  ? navigate('/cart')
                  : handleAddToCartItem({
                       state,
                       dispatch,
                       product,
                       notify,
                       navigate,
                       token,
                    })
               : handleAddItemError();
        }}
        className='btn product-card-btn btn-text-icon-primary'>
        <span className='btn-icon-primary'>
        <i className='fas fa-shopping-cart'></i>
        </span>
        {token
               ? checkItem(state?.cart, product)
                  ? 'Go to Cart'
                  : 'Add to Cart'
               : 'Add to Cart'}
    </button>
    </>
  )
}

export default AddToCartButton