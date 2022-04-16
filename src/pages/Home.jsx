import React from 'react';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Header/Navbar';
import Slider from '../components/Carousel/Slider';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
