import React from 'react';
import { Link } from 'react-router-dom';

import s from './Home.module.scss';

import bg from '../../img/bg.png';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

function Home() {
  return (
    <header className="header">
      <div className="header__item header__bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="header__item">
        <div className="header__logo">
          <GlobalSvgSelector id="logo" />
        </div>
        <h1 className={s.section__title}>Create Account</h1>
        <p className={s.section__text}>Please register your account!</p>
        <Link className="link" to="form/page1">
          <div className={s.createButton} href="#">
            Create Account
            <GlobalSvgSelector id="arrow" />
          </div>
        </Link>
        <div className={s.link}>
          Already have an Account?
          <a href="#">Sign In</a>
        </div>
      </div>
    </header>
  );
}

export default Home;
