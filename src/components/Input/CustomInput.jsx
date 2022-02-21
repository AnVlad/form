import React from 'react';

function CustomInput({ children, placeholder }) {
  return (
    <div className="form__input">
      <input type="text" className="input" placeholder={placeholder} />
      <div className="input__img">{children}</div>
    </div>
  );
}

export default CustomInput;
