import React, { useState } from 'react';

const InputPasswordField = ({ placeholder }) => {
  const [isHide, setIsHide] = useState(true);
  function clickHandler() {
    setIsHide((flag) => !flag);
  }
  return (
    <span class='input-with-show-btn'>
      <input
        class='form-field'
        placeholder={placeholder}
        type={isHide ? 'password' : 'text'}
      />
      <button
        type='button'
        class='show-btn'
        onClick={clickHandler}
        tabindex='-1'
      >
        {isHide ? 'Show' : 'Hide'}
      </button>
    </span>
  );
};

export default InputPasswordField;
