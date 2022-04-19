import React, { useState } from 'react';

const DataFilter = () => {
  const [openFilter, setFilter] = useState(false);

  return (
    <div className='grid-left-filter'>
      <div className='padding-around-filter'>
        <div
          className={
            openFilter
            ? 'padding-around-filter position-fixed filter-open'
            : 'padding-around-filter position-fixed'
          }>
          <div className='title_of_filters'>
            <button
                onClick={() => setFilter((openFilter) => !openFilter)}
                className='link-no-style pointer-event-none'>
                {openFilter ? 'APPLY' : 'FILTERS'}
            </button>
            <button
                onClick={() => {
                  setFilter((openFilter) => false);
                }}
                className='link-no-style link-text-primary clear-all-link'>
                CLEAR ALL
            </button>
			    </div>

        <ul className='filter-section'>
          <div className='filter-divider-line'></div>
          <li className='text-regular-weight filter-section-title'>SORT</li>
          <li>
            <label className='form-label'>
              <input
                className='form-checkbox-field'
                type='radio'
                name='sort'
                value='HIGH_TO_LOW_PRICE'
              />
              Price High to low
            </label>
          </li>
          <li>
            <label className='form-label'>
              <input
                className='form-checkbox-field'
                type='radio'
                name='sort'
                value='LOW_TO_HIGH_PRICE'
              />
              Price Low to High
            </label>
          </li>
          <div className='filter-divider-line'></div>
          <li className='text-regular-weight filter-section-title'>COLOR</li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              White
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              Black
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              Red
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              Blue
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              Yellow
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              Green
            </label>
          </li>
          <div className='filter-divider-line'></div>
          <li className='text-regular-weight filter-section-title'>SIZE</li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />S
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />M
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />L
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              XL
            </label>
          </li>
          <li>
            <label class='form-label'>
              <input class='form-checkbox-field' type='checkbox' />
              XS
            </label>
          </li>
        <div className='filter-divider-line'></div>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default DataFilter;
