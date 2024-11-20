import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Custom CSS for additional styles

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // State to track the current page

  // Page content mapping
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="text-container bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-gray-600">
              Explore my projects, skills, and contact information!
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        );
      case "about":
        return (
          <div className="text-container bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="mt-4 text-gray-600">
              I am a passionate developer focused on delivering quality work.
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="text-container bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p className="mt-4 text-gray-600">
              Reach out for collaborations or inquiries.
            </p>
          </div>
        );
      case "skills":
        return (
          <div className="text-container bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold">My Skills</h1>
            <p className="mt-4 text-gray-600">
              Proficient in JavaScript, React, CSS, and more!
            </p>
          </div>
        );
      default:
        return <h1 className="text-gray-600">Page Not Found</h1>;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <div className="w-3/4 flex justify-center items-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
