import { Link } from 'react-router-dom';
import { RemoveWishlistButton } from '../Buttons/RemoveWishListButton';
import { MoveToCartButton } from '../Buttons/MoveToCartButton';
import './WishListItem.css';

export const WishListItem = ({ product }) => {
   return (
      <div className='product-card'>
      <RemoveWishlistButton key={product._id} product={product} />
      <div className='product-image'>
        <img className='product-image card-img' src={product.image} alt='' />
      </div>
      <div className='product-details'>
        <h3 className='product-heading'>
        <Link to={`/product/${product._id}`} id='product-title'>
            {product.name}
        </Link>
        </h3>
        <div className='rating'>
          <span>
            <i className='fas fa-star'></i>
          </span>
          <span>
            <strong>{product.ratings}.0</strong>/5.0
          </span>
        </div>
        <div className='product-price'>
          <p className='new-price'>
            ₹{product.price.toLocaleString()}
            <span className='old-price'>
              {/* ₹ {product.price.toLocaleString()} */}
            </span>
          </p>
          <div className='cart'>
          <MoveToCartButton key={product._id} product={product} />
          </div>
        </div>
      </div>
    </div>
   );
};