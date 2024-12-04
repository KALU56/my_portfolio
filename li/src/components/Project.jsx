import React from "react";

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
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Project 1"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              This project demonstrates an interactive UI with animations and smooth
              transitions, focused on user engagement and responsiveness.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/your-repo"
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

        {/* Second Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-96">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Project 2"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">apple clone</h3>
            <p className="text-gray-300 mb-4">
              A modern e-commerce application with advanced filtering, cart functionality, and a dynamic checkout experience.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/your-second-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition-all"
              >
                GitHub
              </a>
              <a
                href="https://youtube.com/demo-video-link-2"
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
