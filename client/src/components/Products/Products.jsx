import React from 'react';
// import { products } from '../../data';
import { useData } from '../../context/DataContext';
import { getFilteredData, getSortedData, DataFilter } from '../../pages/ProductListing/DataFilter';
import Product from './Product';
import './Products.css';

const Products = () => {
  const { state } = useData();
  const { products, sortBy, showInventory, showFastDelivery } = state;
  const sortedData = getSortedData(products, sortBy);
   const filteredData = getFilteredData(sortedData, {
      showInventory,
      showFastDelivery,
   });

  return (
    <div className='products-container'>
      {filteredData.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
