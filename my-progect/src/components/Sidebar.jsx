import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="profile.jpg" alt="Profile" className="profile-pic" />
      <h2>kalkidan-behailu</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <footer>
        <p>© Copyright 2024 All rights reserved</p>
      </footer>
    </div>
  );
}

export default Sidebar;
