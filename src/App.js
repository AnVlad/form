import './App.css';

import './styles/styles.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Finish from './pages/Finish';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/*" element={<Pages />} />
        <Route path="finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
