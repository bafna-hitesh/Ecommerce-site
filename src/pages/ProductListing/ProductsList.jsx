import React from 'react';
import Products from '../../components/Products/Products';
import DataFilter from './DataFilter';
import './ProductList.css';

const ProductsList = () => {

  return (
    <>
      <div className='productlist-container'>
        <DataFilter />
        <Products />
      </div>
    </>
  );
};

export default ProductsList;
