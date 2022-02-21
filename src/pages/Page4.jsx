import React from 'react';
import { Link } from 'react-router-dom';
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import Button from '../components/Bottom/Button';
import CustomInput from '../components/Input/CustomInput';
import Select from '../components/SelectBoxes/Select';

function Page4() {
  return (
    <div>
      <h1 className="section__title">What Are You Interested In?</h1>
      <p className="section__text">Select from the list and add your own interests.</p>

      <CustomInput placeholder="Add Your Interest">
        <GlobalSvgSelector id="search" />
      </CustomInput>

      <h2>Business</h2>
      <div className="interests">
        <Select>Enterpreneurship</Select>
        <Select>Marketing</Select>
        <Select>Sales</Select>
        <Select>Consulting</Select>
        <Select>E-commerce</Select>
        <Select>Retail</Select>
        <Select>Real Estate</Select>
      </div>

      <h2>Investing & Finance</h2>
      <div className="interests">
        <Select>Angle Investing</Select>
        <Select>Crypto</Select>
        <Select>Quant Finance</Select>
        <Select>Venture Capital</Select>
        <Select>Investment Banking</Select>
        <Select>Economics</Select>
      </div>

      <h2>Lifestyle</h2>
      <div className="interests">
        <Select>Travel</Select>
        <Select>Fitness</Select>
        <Select>Food</Select>
        <Select>Gaming</Select>
        <Select>Writing</Select>
        <Select>Reading</Select>
        <Select>Dinner Parties</Select>
        <Select>Poker</Select>
        <Select>Chess</Select>
        <Select>Cooking</Select>
        <Select>Wellness</Select>
        <Select>Parenting</Select>
      </div>

      <div className="button__footer">
        <Link className="link" to="/form/page3">
          <Button classButton={'back'}>Back</Button>
        </Link>
        <Link className="link" to="/form/page5">
          <Button classButton={'next'}>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page4;
