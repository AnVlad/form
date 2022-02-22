import React from 'react';
import { Link } from 'react-router-dom';

import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import Button from '../components/Bottom/Button';
import CustomInput from '../components/Input/CustomInput';

function Page3() {
  return (
    <div>
      <h1 className="section__title">Fill Your Profile</h1>
      <p className="section__text">
        This basic information will be shown to your matches every week. Tell us what you would like
        to show!
      </p>
      <div className="profile">
        <input className="profile__input" type="file" name="" id="" />
        <div className="file__loader">
          <div className="file__img">
            <GlobalSvgSelector id="gallery" />
          </div>
          <div className="file__text">Upload Your Photo</div>
        </div>
        <div className="file__inputs">
          <h2>Other Profile</h2>
          <CustomInput placeholder="LinkedIn URL" svg={<GlobalSvgSelector id="linkedIn" />} />
          <CustomInput placeholder="Twitter URL" svg={<GlobalSvgSelector id="twitter" />} />
        </div>
      </div>

      <div className="button__footer">
        <Link className="link" to="/form/page2">
          <Button classButton={'back'}>Back</Button>
        </Link>
        <Link className="link" to="/form/page4">
          <Button classButton={'next'}>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page3;
