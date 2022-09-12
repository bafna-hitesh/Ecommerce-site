import React from 'react';
// import { products } from '../../data';
import { useData } from '../../context/DataContext';
import { getFilteredData, getSortedData, getFilteredColor, getFilteredBrand } from '../../pages/ProductListing/DataFilter';
import Product from './Product';
import './Products.css';

const Products = () => {
  const { state } = useData();
  const { products, sortBy, showInventory, showFastDelivery, sortByColor, sortByBrand } = state;
  const sortedData = getSortedData(products, sortBy);
  const filteredByColor = getFilteredColor(sortedData, sortByColor);
  const filteredByBrand = getFilteredBrand(filteredByColor, sortByBrand);
  const filteredData = getFilteredData(filteredByBrand, {
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
