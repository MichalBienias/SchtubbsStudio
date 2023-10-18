// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Resume from './Resume';
import HomePage from './HomePage';
import './App.css';
import ProjectsPage from './ProjectsPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
