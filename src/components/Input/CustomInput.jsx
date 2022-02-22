import React from 'react';

function CustomInput({ placeholder, svg }) {
  return (
    <div className="form__input">
      <input type="text" className="input" placeholder={placeholder} />
      <div className="input__img">{svg}</div>
    </div>
  );
}

export default CustomInput;
