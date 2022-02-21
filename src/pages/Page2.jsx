import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Bottom/Button';
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
        <Hub name="Brainstorm with peers">
          <img src="image5.png" alt="" />
        </Hub>
        <Hub name="Grow your team">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Start a company">
          <img src="image5.png" alt="" />
        </Hub>
        <Hub name="Explore other companies">
          <img src="image5.png" alt="" />
        </Hub>
        <Hub name="Business development">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Invest">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Explore new projects">
          <img src="image5.png" alt="" />
        </Hub>
        <Hub name="Mentor others">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Organize events">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Raise funding">
          <img src="image5.png" alt="" />
        </Hub>
        <Hub name="Find a cofounder">
          <img src="image5.png" alt="" />
        </Hub>{' '}
        <Hub name="Meet intresting people">
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
