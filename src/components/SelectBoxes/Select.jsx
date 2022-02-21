import React, { useState } from 'react';
import s from './Select.module.scss';

function Select({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={`${s.interest__item} ${isChecked ? s.interest__border : ''}`}>
      <input
        type="checkbox"
        className={s.interest__checkbox}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={`${s.interest__text} ${isChecked ? s.interest__active : ''}`}>
        {children}
      </span>
    </label>
  );
}

export default Select;
