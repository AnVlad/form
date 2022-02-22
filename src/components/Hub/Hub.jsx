import React from 'react';
import s from './Hub.module.scss';

function Hub({ name, children, inputType }) {
  return (
    <div className={`${s.hub} `}>
      <div className={s.icon}>
        <div className={s.image}>{children}</div>
      </div>

      <div className={s.name}>{name}</div>

      {inputType}
    </div>
  );
}

export default Hub;
