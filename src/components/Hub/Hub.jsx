import React, { useState } from 'react';
import Checkbox from '../Check/Checkbox';
import Radio from '../Check/Radio';
import s from './Hub.module.scss';

function Hub({ name, children, checkClass, value, isSelected, setIsSelected }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`${s.hub} ${isChecked ? s.hub__active : ''}`}>
      <div className={s.icon}>
        <div className={s.image}>{children}</div>
      </div>
      <div className={s.name}>{name}</div>
      {checkClass === 'radio' ? (
        <Radio isSelected={isSelected} setIsSelected={setIsSelected} value={value} />
      ) : (
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      )}
    </div>
  );
}

export default Hub;
