import React from 'react';
import { categories } from '../../data';
import CategoryItem from './CategoryItem';
import './Categories.css';

const Categories = () => {
  return (
    <div className='category-container'>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
