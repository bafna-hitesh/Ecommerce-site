import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { productcolor, brandsName } from './FilterData';

export function getSortedData(productList, sortBy) {
  if (sortBy && sortBy === 'LOW_TO_HIGH') {
     return productList.sort((a, b) => a['price'] - b['price']);
  }
  if (sortBy && sortBy === 'HIGH_TO_LOW') {
     return productList.sort((a, b) => b['price'] - a['price']);
  }
  return productList;
}

export function getFilteredData(
  productList,
  { showFastDelivery, showInventory },
) {
  return productList
     .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
     .filter(({ inStock }) => (showInventory ? true : inStock));
}

export function getFilteredColor(productList, productcolor) {
  if (productcolor.length > 0) {
        productList = productList.filter((product) =>
        productcolor.includes(product.color)
      );
    }
  return productList;
}
export function getFilteredBrand(productList, productname) {
  if (productname.length > 0) {
        productList = productList.filter((product) =>
        productname.includes(product.brand)
      );
    }
  return productList;
}

export const DataFilter = () => {
  const [openFilter, setFilter] = useState(false);
  const { state, dispatch } = useData();
  const { sortBy } = state;

  const handleByColor = (color) => {
    if (state.sortByColor.includes(color)) {
       dispatch({ type: 'REMOVE_CATEGORY', payload: color });
    } else {
       dispatch({ type: 'SET_CATEGORY', payload: color });
    }
  };

  const handleByBrand = (name) => {
    if (state.sortByBrand.includes(name)) {
       dispatch({ type: 'REMOVE_BRAND', payload: name });
    } else {
       dispatch({ type: 'SET_BRAND', payload: name });
    }
  };

  return (
    <div className='grid-left-filter'>
      <div className='padding-around-filter'>
        <div
          className={
            openFilter
              ? 'padding-around-filter position-fixed filter-open'
              : 'padding-around-filter position-fixed'
          }
        >
          <div className='title_of_filters'>
            <button
              onClick={() => setFilter((openFilter) => !openFilter)}
              className='link-no-style pointer-event-none'
            >
              {openFilter ? 'APPLY' : 'FILTERS'}
            </button>
            <button
              onClick={() => {
                setFilter((openFilter) => false);
                dispatch({ type: 'RESET_FILTERS' });
              }}
              className='link-no-style link-text-primary clear-btn'
            >
              CLEAR ALL
            </button>
          </div>

          <ul className='filter-section'>
            <div className='filter-divider-line'></div>
            <li className='text-regular-weight filter-section-title'>SORT</li>
            <li>
              <label className='form-label'>
                <input
                  onClick={() =>
                    dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                 }
                  className='form-checkbox-field'
                  type='radio'
                  name='sort'
                  checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                />
                Price High to low
              </label>
            </li>
            <li>
              <label className='form-label'>
                <input
                  onClick={() =>
                    dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                 }
                  className='form-checkbox-field'
                  type='radio'
                  name='sort'
                  checked={sortBy && sortBy === 'LOW_TO_HIGH'}
                />
                Price Low to High
              </label>
            </li>
            <div className='filter-divider-line'></div>
            
            <div className='text-regular-weight filter-section-title'>COLOR</div>             
              <li className='form-label'>
                  {productcolor.map((color) => {
                     return (
                        <div key={color} >
                           <input
                              onChange={() => handleByColor(color)}
                              checked={state.sortByColor.includes(color)}
                              name='filter-md'
                              type='checkbox'
                              className='form-checkbox-field'
                           />
                           {color}
                        </div>
                     );
                  })}
              </li>

            <div className='filter-divider-line'></div>
            
            <li className='text-regular-weight filter-section-title'>BRANDS</li>
            <li className='form-label'>
                  {brandsName.map((name) => {
                     return (
                        <div key={name} >
                           <input
                              onChange={() => handleByBrand(name)}
                              checked={state.sortByBrand.includes(name)}
                              name='filter-md'
                              type='checkbox'
                              className='form-checkbox-field'
                           />
                           {name}
                        </div>
                     );
                  })}
              </li>
            <div className='filter-divider-line'></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

