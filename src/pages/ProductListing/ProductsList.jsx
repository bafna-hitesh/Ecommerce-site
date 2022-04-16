import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import Products from '../../components/Products/Products';
import DataFilter from './DataFilter';
import './ProductList.css';

const ProductsList = () => {
  return (
    <>
      <Navbar />
      <div className='productlist-container'>
        <DataFilter />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default ProductsList;
