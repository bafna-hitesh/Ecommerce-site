import React from 'react'

const Product = ({item}) => {
  return (
    <div className='product-card'>
        <img className='product-card-img' src={item.img} alt="" />
        <div className="product-card-info">
            <span className="shopping-cart-icon product-card-icon">
            <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="search-icon product-card-icon">
                <i className="fa fa-search"></i>
            </span>
            <span className="heart-icon product-card-icon">
                <i class="fa-solid fa-heart"></i>
            </span> 
        </div>
    </div>
  )
}

export default Product