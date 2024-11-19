import React from "react";
import Sidebar from "./components/sidebar";
import "./App.css"; // Importing the CSS file

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with background image */}
      <div className="w-3/4 main-content">
        <div className="text-container">
          <h1>I am a Designer</h1>
          <p>
            100% HTML5 bootstrap templates made by{" "}
            <a href="https://colorlib.com" className="text-blue-500">
              Colorlib
            </a>
          </p>
          <button>View Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default App;
