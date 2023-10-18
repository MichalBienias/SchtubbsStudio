// src/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li> {/* Add this line */}
      </ul>
    </nav>
  );
}

export default NavBar;
