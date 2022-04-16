import React, { useState } from 'react';
import { sliderIteam } from '../../data';
import './Slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    direction === 'left'
      ? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderIteam.length - 1)
      : setSlideIndex(slideIndex < sliderIteam.length - 1 ? slideIndex + 1 : 0);
  };

  return (
    <div className='slider-container'>
      <button
        className='slider-arrow left-arrow'
        onClick={() => handleClick('left')}
      >
        <i className='fa-solid fa-arrow-left'></i>
      </button>
      <div
        className='wrapper'
        style={{
          transform: `translate(${slideIndex * -100}vw)`,
          transition: 'transform ease-out 0.5s',
        }}
      >
        {sliderIteam.map((item) => (
          <div className='slide' key={item.id}>
            <div className='img-container'>
              <img src={item.img} alt='' />
            </div>
            <div className='info-container'>
              <h1 className='title'>{item.title}</h1>
              <p className='desc'>{item.description}</p>
              <button className='info-btn'>shop now</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className='slider-arrow right-arrow'
        onClick={() => handleClick('right')}
      >
        <i class='fa-solid fa-arrow-right'></i>
      </button>
    </div>
  );
};

export default Slider;
