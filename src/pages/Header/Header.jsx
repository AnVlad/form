import React from 'react';

import s from './Header.module.scss';

import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <GlobalSvgSelector id="logo" />
        </Link>
      </div>
      <div className={s.steps}>
        <div className={s.progress}>
          <div className={s.progress__succeed}></div>
        </div>
        <div className={s.icon}>
          <Link to="page1">
            <GlobalSvgSelector id="location" />
          </Link>
        </div>
        <div className={s.icon}>
          <Link to="page2">
            <GlobalSvgSelector id="crown" />
          </Link>
        </div>

        <div className={s.icon}>
          <Link to="page3">
            <GlobalSvgSelector id="frame" />
          </Link>
        </div>

        <div className={s.icon}>
          <Link to="page4">
            <GlobalSvgSelector id="heart" />
          </Link>
        </div>

        <div className={s.icon}>
          <Link to="page5">
            <GlobalSvgSelector id="user-tag" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
