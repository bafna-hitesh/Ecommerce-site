import axios from 'axios';
import { checkItem, API_ENDPOINT } from './utils';

export const handleFetchUserDetails = async (dispatch, token) => {
   try {
      const {
         data: { user },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user`,
         headers: {
            Authorization: token,
         },
      });
      
      dispatch({ type: 'SET_USER_DETAILS', payload: { user: user } });
   } catch (error) {
      console.log(error);
   }
};

export const handleFetchProducts = async (dispatch) => {
   try {
      const {
         data: { products },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/products`,
      });

      dispatch({ type: 'SET_PRODUCTS', payload: products });
   } catch (error) {
      console.log(error);
   }
};

export const handleFetchCart = async (dispatch, token) => {
   try {
      const {
         data: { response },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/cart`,
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'SET_USER_CART', payload: response });
   } catch (error) {
      console.log(error);
   }
};

export const handleFetchWishlist = async (dispatch, token) => {
   try {
      const {
         data: { response },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/wishlist`,
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'SET_USER_WISHLIST', payload: response });
   } catch (error) {
      console.log(error);
   }
};

export const handleAddToCartItem = async ({
   dispatch,
   product,
   notify,
   token,
}) => {
   try {
      const {
         data: { response },
      } = await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/cart/${product._id}`,
         headers: {
            Authorization: token,
         },
      });

      notify(`${product.name} Adding to the Cart`);
      dispatch({ type: 'SET_USER_CART', payload: response });
   } catch (error) {
      console.log({ error });
   }
};

export const handleToggleWishList = async ({
   state,
   dispatch,
   product,
   notify,
   token,
}) => {
   if (!checkItem(state.wishList, product)) {
      try {
         const {
            data: { response },
         } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/wishlist/${product._id}`,
            data: {
               _id: product._id,
            },
            headers: {
               Authorization: token,
            },
         });

         notify(`${product.name} Adding to the Wishlist`);
         dispatch({ type: 'SET_USER_WISHLIST', payload: response });
      } catch (error) {
         console.log({ error });
      }
   } else {
      try {
         await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/wishlist/${product._id}`,
            headers: {
               Authorization: token,
            },
         });

         notify(`${product.name} Removing from the Wishlist`);
         dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
      } catch (error) {
         console.log({ error });
      }
   }
};

export const handleRemoveWishListItem = async ({
   state,
   dispatch,
   product,
   notify,
   token,
}) => {
   
      
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/wishlist/${product._id}`,
            headers: {
               Authorization: token,
            },
         });
         if (status === 200 || status === 201) {
            notify(`${product.name} Removing from the Wishlist`);
            dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
         }
      } catch (error) {
         console.log({ error });
      }

};

export const handleRemoveCartItem = async ({
   dispatch,
   product,
   notify,
   token,
}) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/cart/${product._id}`,
         data: {
            _id: product.id,
         },
         headers: {
            Authorization: token,
         },
      });
      notify(`${product.name} Removing from the Cart`);
      dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   } catch (error) {
      console.log({ error });
   }
};

export const handleMoveItemToCart = async ({
   state,
   dispatch,
   product,
   notify,
   token,
}) => {
   if (!checkItem(state.cart, product)) {
      try {
         const {
            data: { response },
         } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/cart/${product._id}`,
            data: {
               _id: product._id,
               quantity: 1,
            },
            headers: {
               Authorization: token,
            },
         });
         notify(`${product.name} Moving to the Cart`);
         dispatch({ type: 'SET_USER_CART', payload: response });
         handleRemoveWishListItem({
            state,
            dispatch,
            product,
            notify,
            token,
         });
      } catch (error) {
         console.log({ error });
      }
   } else {
      notify(`${product.name} Already present in the Cart`);
      handleRemoveWishListItem({ state, dispatch, product, notify, token });
   }
};

export const handleMoveItemToWishlist = async ({
   state,
   dispatch,
   product,
   notify,
   token,
}) => {
   if (!checkItem(state.wishList, product)) {
      try {
         const {
            data: { response },
         } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/wishlist/${product._id}`,
            data: {
               _id: product._id,
            },
            headers: {
               Authorization: token,
            },
         });
         notify(`${product.name} Moving to the Wishlist`);
         dispatch({ type: 'SET_USER_WISHLIST', payload: response });
         handleRemoveCartItem({
            state,
            dispatch,
            product,
            notify,
            token,
         });
      } catch (error) {
         console.log({ error });
      }
   } else {
      notify(`${product.name} Already present in the Wishlist`);
      handleRemoveCartItem({ state, dispatch, product, notify, token });
   }
};