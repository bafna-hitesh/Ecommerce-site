import React, { useState } from 'react';

const InputPasswordField = ({ placeholder, name, value, handleOnChangeInput }) => {
  const [isHide, setIsHide] = useState(true);
  function clickHandler() {
    setIsHide((flag) => !flag);
  }
  return (
    <span className='input-with-show-btn'>
      <input
        className='form-field'
        placeholder={placeholder}
        type={isHide ? 'password' : 'text'}
        name={name}
        value={value}
        onChange={handleOnChangeInput}
      />
      <button
        type='button'
        className='show-btn'
        onClick={clickHandler}
        tabIndex='-1'
      >
        {isHide ? 'Show' : 'Hide'}
      </button>
    </span>
  );
};

export default InputPasswordField;
