import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import CustomInput from '../components/Input/CustomInput';
import Button from '../components/Bottom/Button';
import Hub from '../components/Hub/Hub';
import Radio from '../components/Check/Radio';

function Page1() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <h1 className="section__title">Which Hub Are You In?</h1>
      <p className="section__text">
        We are active in major cities and we schedule meetings based on time zones. Let us know your
        home base.
      </p>

      <CustomInput placeholder="Search your hub.." svg={<GlobalSvgSelector id="search" />} />

      <h2>Popular Hub</h2>

      <div className="hub__cities">
        <Hub
          name="Austin"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option1" />
          }>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub
          name="Dallas"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option2" />
          }>
          <img src="image6.png" alt="" />
        </Hub>

        <Hub
          name="San Antonio"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option3" />
          }>
          <img src="image7.png" alt="" />
        </Hub>

        <Hub
          name="Houston"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option4" />
          }>
          <img src="image8.png" alt="" />
        </Hub>

        <Hub
          name="New York"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option5" />
          }>
          <img src="image9.png" alt="" />
        </Hub>

        <Hub
          name="Los Angeles"
          inputType={
            <Radio isSelected={isSelected} setIsSelected={setIsSelected} value="option6" />
          }>
          <img src="image10.png" alt="" />
        </Hub>
      </div>

      <div className="button__footer">
        <Link className="link" to="/form/page2">
          <Button classButton={'next'}>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page1;
