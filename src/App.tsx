import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { NavBar } from './app/components';
import HomePage from './app/pages/HomePage';
import JobPage from './app/pages/JobPage';

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <NavBar />
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
          <Route path="/job/:id" element={<JobPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
