import React from 'react';
import s from './Radio.module.scss';

function Radio({ isSelected, setIsSelected, value }) {
  const select = () => {
    setIsSelected(value);
  };

  return (
    <label className={s.radio} onClick={select}>
      <input type="radio" value={value} />
      <div className={`${s.radio__state} ${isSelected === value ? s.radio__active : ''}`}></div>
    </label>
  );
}

export default Radio;
