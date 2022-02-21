import React from 'react';
import s from './Button.module.scss';

function Button({ children, classButton }) {
  return (
    <>
      {classButton === 'next' ? (
        <div className={s.next}>{children}</div>
      ) : (
        <div className={s.back}>{children}</div>
      )}
    </>
  );
}

export default Button;
