import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Buttons/AddToCartButton';
import WishlistButton from '../Buttons/WishlistButton';


const Product = ({ product }) => {
  let randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  
  return (
    <div className='product-card'>
      <WishlistButton product={ product }/>
      <Link to={`/product/${product._id}`} className='product-image'>
        <img className='product-image card-img' src={product.image} alt='' />
      </Link >
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
              ₹ {product.oldprice.toLocaleString()}
            </span>
          </p>
          <div className='cart'>
              <AddToCartButton key={product._id} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

