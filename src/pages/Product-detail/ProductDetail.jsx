import React from 'react'
import './Product-detail.css'

const ProductDetail = () => {
  return (
      <>
      <div className="product-detail-card">
        <div>
          <img className="product-detail-image" alt="product" src='https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        </div>
          <div className="card-horizontal vertical-middle">
            <div className="text-container">
                <h3 className="card-horizontal-title ">
                  Bianyo Artist's A4 Portfolio Folder Case with Shoulder Strap
                </h3>
                <p>Bianyo</p>
                  <div className="rating-star-container">
                    <i className="fas fa-star rating-star-icon" style={{color: 'rgb(255, 180, 0)'}}></i>
                    <i className="fas fa-star rating-star-icon" style={{color: 'rgb(255, 180, 0)'}}></i>
                    <i className="fas fa-star rating-star-icon" style={{color: 'rgb(255, 180, 0)'}}></i>
                    <i className="fas fa-star rating-star-icon"></i>
                    <i className="fas fa-star rating-star-icon"></i> 
                    <span className="review-box">(20 reviews)</span>
                  </div>
                <p className="card-horizontal-price">
                  <span className="discounted-price">Rs.381.99</span>
                  <span className="actual-price">Rs.749</span> 
                  <span className="primary-text-color">(49%OFF)</span>
                </p>
                  <p className='tax-desc'>inclusive of all taxes</p>
                  <div className="filter-divider-line"></div>
                  <ul className="card-horizontal-description-container">
                    <li>
                      <i className="fas fa-truck flip-image feature-icon"></i>
                      <span>Fast delivery available</span>
                    </li>
                    <li>
                      <i className="fas fa-check-square feature-icon"></i>
                      <span>Price displayed is inclusive of GST</span>
                    </li>
                    <li>
                      <i className="far fa-calendar-check feature-icon"></i>
                      <span>Currently in stock</span>
                    </li>
                  </ul>
                    <div className="CTA-Container">
                      <button className="btn btn-text-icon-primary btn-lg-size">
                        <span className="btn-icon-primary">
                          <i className="fas fa-shopping-cart"></i>
                        </span>Add to Cart
                      </button>
                      <button className="btn btn-text-icon-secondary btn-lg-size">
                        <i className="btn-icon far fa-heart"></i>
                        Add to Wishlist
                      </button>
                    </div>
                </div>
           </div>
      </div>
      </>
  )
}

export default ProductDetail
