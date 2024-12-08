import React from "react";
import profileImage from '../assets/profileImage/portfolio.png'
const Projects = () => {
  return (
    <div className="min-h-screen bg-[rgb(51,65,85)] text-white p-6">
      <h1 id="projects" className="text-4xl font-bold text-yellow-500 mb-12 text-center">
        #Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* First Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-96">
        <img
      src={profileImage}
      alt="Placeholder"
      // className="w-full h-full object-cover"
    />
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              This project demonstrates an interactive UI with animations and smooth
              transitions, focused on user engagement and responsiveness.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/KALU56"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition-all"
              >
                GitHub
              </a>
              <a
                href="https://youtube.com/demo-video-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition-all"
              >
                Video Demo
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Projects;
