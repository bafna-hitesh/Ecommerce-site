import React from 'react';
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Carousel/Slider';
import './home.css'

const Home = () => {
  return (
    <>
      <Slider />
      
      <h2 className='text-Featured'>Featured Categories</h2>
			<div className='title-underline'></div>
      <Categories />
    </>
  );
};

export default Home;
