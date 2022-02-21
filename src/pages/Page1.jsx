import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import Button from '../components/Bottom/Button';
import Hub from '../components/Hub/Hub';
import CustomInput from '../components/Input/CustomInput';

function Page1() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <h1 className="section__title">Which Hub Are You In?</h1>
      <p className="section__text">
        We are active in major cities and we schedule meetings based on time zones. Let us know your
        home base.
      </p>

      <CustomInput placeholder="Search your hub..">
        <GlobalSvgSelector id="search" />
      </CustomInput>

      <h2>Popular Hub</h2>

      <div className="hub__cities">
        <Hub
          name="Austin"
          checkClass="radio"
          value="option1"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
          <img src="image5.png" alt="" />
        </Hub>
        <Hub
          name="Dallas"
          checkClass="radio"
          value="option2"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
          <img src="image6.png" alt="" />
        </Hub>
        <Hub
          name="San Antonio"
          checkClass="radio"
          value="option3"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
          <img src="image7.png" alt="" />
        </Hub>
        <Hub
          name="Houston"
          checkClass="radio"
          value="option4"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
          <img src="image8.png" alt="" />
        </Hub>
        <Hub
          name="New York"
          checkClass="radio"
          value="option5"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
          <img src="image9.png" alt="" />
        </Hub>
        <Hub
          name="Los Angeles"
          checkClass="radio"
          value="option6"
          isSelected={isSelected}
          setIsSelected={setIsSelected}>
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
