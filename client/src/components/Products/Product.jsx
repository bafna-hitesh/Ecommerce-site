import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img className='product-image card-img' src={product.img} alt='' />
      </div>
      <div className='product-details'>
        <h3 className='product-heading'>
          Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm
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
            new-price
            {/* ₹{product.price.toLocaleString()} */}
            <span className='old-price'>
              old-price
              {/* ₹ {product.price.toLocaleString()} */}
            </span>
          </p>
          <div className='cart'>
            <button className='btn product-card-btn btn-text-icon-primary'>
              <span className='btn-icon-primary'>
                <i className='fas fa-shopping-cart'></i>
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

/**
 *
 */
