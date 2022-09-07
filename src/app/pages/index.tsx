import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import './index.module.css'
import { NavBar } from '../components';
import HomePage from './HomePage';
import JobPage from './JobPage';


const App = () => {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <NavBar />
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
            <Route path="/job/:id" element={<JobPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
