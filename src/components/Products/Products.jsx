import React from 'react';
import { products } from '../../data';
import Product from './Product';
import './Products.css';

const Products = () => {
  return (
    <div className='products-container'>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
