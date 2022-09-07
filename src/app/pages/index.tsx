import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { NavBar } from '../components';
import HomePage from './HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
