import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

function Pages() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
        <Route path="page5" element={<Page5 />} />
      </Routes>
    </div>
  );
}

export default Pages;