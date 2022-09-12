
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleToggleWishList } from '../../utils/serverRequest';
import { checkItem } from '../../utils/utils';

 const WishListButton = ({ product }) => {
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
    
   return (
      <>
         <button
            className='btn btn-secondary btn-wishlist'
            onClick={() =>
               token
                  ? handleToggleWishList({
                       state,
                       dispatch,
                       product,
                       notify,
                       token,
                    })
                  : handleAddItemError()
         }>
            <span>
            <i
               className={
                  token ?
                     !checkItem(state?.wishList, product)
                           ? 'far fa-heart fa-heart-product'
                           : 'fas fa-heart fa-heart-product active'
                        : 'far fa-heart fa-heart-product '
               }>

            </i>
            </span>
         </button>
      </>
   );
};
export default WishListButton;

