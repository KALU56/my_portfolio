import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Profile"
          className="profile-image"
        />
        <h2>kalkidan-behailu</h2>
      
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
     
        <a href="#skills">Skills</a>
        
       
       
        <a href="#contact">Contact</a>
      </nav>
      <footer>
        <p>© Copyright 2024 All rights reserved</p>
      
      </footer>
    </div>
  );
}

export default Sidebar;
