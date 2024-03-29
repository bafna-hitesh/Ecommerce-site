import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleRemoveWishListItem } from '../../utils/serverRequest';

export const RemoveWishlistButton = ({ product }) => {
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleRemoveWishListItem({
                  state,
                  dispatch,
                  product,
                  notify,
                  token,
               })
            }
            className='btn btn-rm-wishlist'
            type='button'>
            <i className='far fa-trash-alt'></i>
         </button>
      </>
   );
};
