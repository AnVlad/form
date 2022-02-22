import React from 'react';
import { Link } from 'react-router-dom';

import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import Button from '../components/Bottom/Button';
import CustomInput from '../components/Input/CustomInput';

function Page5() {
  return (
    <div>
      <h1 className="section__title">Tell Us About Your Self</h1>
      <p className="section__text">Select from the list and add your own interests.</p>

      <div className="names">
        <CustomInput placeholder="First Name" svg={<GlobalSvgSelector id="user" />} />
        <CustomInput placeholder="Last Name" svg={<GlobalSvgSelector id="user" />} />
      </div>

      <div className="aboutYourself">
        <textarea type="text" className="aboutYourself__input" placeholder="About Your Self" />
      </div>

      <div className="button__footer">
        <Link className="link" to="/form/page4">
          <Button classButton={'back'}>Back</Button>
        </Link>
        <Link className="link" to="/finish">
          <Button classButton={'next'}>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page5;
