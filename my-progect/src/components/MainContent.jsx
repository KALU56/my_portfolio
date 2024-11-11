import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <h1>I am a full stack developer</h1>
     
      <button className="portfolio-button">View Portfolio</button>
      <img
        src="https://via.placeholder.com/400x500"
        alt="Designer"
        className="main-image"
      />
    </div>
  );
}

export default MainContent;
