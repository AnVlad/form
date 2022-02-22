import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button/Button';
import Checkbox from '../components/Check/Checkbox';
import Hub from '../components/Hub/Hub';

function Page2() {
  return (
    <div>
      <h1 className="section__title">What Are Your Objectives?</h1>
      <p className="section__text">
        Select up to 3 objectives. These will be kept private from other users but help us find
        relevant matches.
      </p>
      <h2>Select Objectives</h2>

      <div className="hub__cities">
        <Hub name="Brainstorm with peers" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Grow your team" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Start a company" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Explore other companies" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Business development" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Invest" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Explore new projects" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Mentor others" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Organize events" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Raise funding" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Find a cofounder" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>

        <Hub name="Meet intresting people" inputType={<Checkbox />}>
          <img src="image5.png" alt="" />
        </Hub>
      </div>

      <div className="button__footer">
        <Link className="link" to="/form/page1">
          <Button classButton={'back'}>Back</Button>
        </Link>

        <Link className="link" to="/form/page3">
          <Button classButton={'next'}>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page2;
