import React, { useState } from 'react';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import s from './Checkbox.module.scss';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={s.checkbox}>
      <input
        type="checkbox"
        className={s.checkbox__input}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className={` ${isChecked ? s.checkbox__active : ''}`} aria-hidden="true">
        <GlobalSvgSelector id="check-mark" />
      </div>
    </label>
  );
}

export default Checkbox;
