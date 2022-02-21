import React from 'react';
import { Link } from 'react-router-dom';

import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import Button from '../components/Bottom/Button';

function Finish() {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <GlobalSvgSelector id="logo" />
        </Link>
      </div>
      <div className="finish__img">
        <img src="image21.png" />
      </div>
      <div>
        <h1 className="section__title">Finish Your Registration</h1>
        <p className="section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <h2>Why Connect My Google Account?</h2>
        <p className="section__text">
          Your contact and calendar data helps us schedule meetings and ensure that your matches are
          relevant (not matching you with people you already know, for instance).
        </p>
        <p className="section__text">
          We’re serious about your privacy and will never share your private data with other users
          or third parties without your consent.
        </p>
        <div className="finish__button">
          <GlobalSvgSelector id="google" />
          Finish Sign Up With Google
        </div>
      </div>
    </div>
  );
}

export default Finish;
