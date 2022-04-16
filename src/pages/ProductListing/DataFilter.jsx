import React from 'react';

const DataFilter = () => {
  return (
    <div className='grid-left-filter'>
      <div className='padding-around-filter'>
        <div className='title_of_filters'>
          <button className='link-no-style'>FILTERS</button>
          <button className='link-no-style clear-btn'>CLEAR ALL</button>
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
        </ul>
      </div>
    </div>
  );
};

export default DataFilter;
