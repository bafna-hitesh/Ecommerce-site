import React from 'react';
import { products } from '../../data';
import Product from './Product';
import './Products.css';

const Products = () => {
  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
