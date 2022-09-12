import { useData } from '../../context/DataContext';
import CartIteam  from '../../components/Cart/CartIteam'
import  CartSummerty  from '../../components/Cart/CartSummery'
import './cart.css'

const Cart = () => {
   const { state } = useData();

   return (
      <>
      <h1 className='cart-header'>My Cart</h1>
      <div className='cart-section'>
         <div className='cart-item-section'>
         {state.cart.map(({product, quantity}) => {
            return (
            <CartIteam 
               key={product._id}
               product={product}
               quantity={quantity}
            />);
         })}
         </div>

            <CartSummerty/>
      </div>
      </>
   );
};

export default Cart;