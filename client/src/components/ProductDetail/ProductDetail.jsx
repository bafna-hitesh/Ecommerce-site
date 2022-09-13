import React from 'react';
import './Product-detail.css';
import AddToCartButton from '../Buttons/AddToCartButton';
import MoveToWishListButton from '../Buttons/MoveToWishListButton';

const ratingArray = [1, 2, 3, 4, 5];

const ProductDetail = ({ product }) => {
 let discountPercerntage = Math.floor(100 * (product?.oldprice - product?.price) / product?.oldprice)
  return (
    <>
      <div className='product-detail-card'>
        <div>
          <img
            className='product-detail-image'
            alt='product'
            src= {product?.image} 
          />
        </div>
        <div className='card-horizontal vertical-middle'>
          <div className='text-container'>
            <h3 className='card-horizontal-title '>
              {product?.name}
            </h3>
            <p>{product?.brand}</p>
            <div className='rating-star-container'>
            {ratingArray.map((item) => (
										<i
											key={item}
											style={{
												color:
													item <= Number(product?.ratings)
														? '#ffb400'
														: '',
											}}
											className='fas fa-star rating-star-icon'></i>
									))}{' '}
              <span className='review-box'>(20 reviews)</span>
            </div>
            <p className='card-horizontal-price'>
              <span className='discounted-price'>Rs. {product?.price}</span>
              <span className='actual-price'>Rs. {product?.oldprice }</span>
              <span className='primary-text-color'>(${discountPercerntage}%OFF)</span>
            </p>
            <p className='tax-desc'>inclusive of all taxes</p>
            <div className='filter-divider-line'></div>
            <ul className='card-horizontal-description-container'>
              <li>
                <i className='fas fa-truck flip-image feature-icon'></i>
                <span>Fast delivery available</span>
              </li>
              <li>
                <i className='fas fa-check-square feature-icon'></i>
                <span>Price displayed is inclusive of GST</span>
              </li>
              <li>
                <i className='far fa-calendar-check feature-icon'></i>
                <span>{product.inStock === true ? 'In Stock' : 'Out of Stock'}</span>
              </li>
            </ul>
            <div className='CTA-Container'>
              <button className='btn btn-text-icon-primary btn-lg-size'>
                {/* <span className='btn-icon-primary'>
                  <i className='fas fa-shopping-cart'></i>
                </span> */}
                <AddToCartButton key={product.id} product={product}/>
              </button>
              <button className='btn btn-text-icon-secondary btn-lg-size'>
                <i className='btn-icon far fa-heart'></i>
                <MoveToWishListButton key={product.id} product={product}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
