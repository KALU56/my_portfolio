import React from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-3/4 bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">I am a Designer</h1>
          <p className="text-gray-500 mt-2">
            100% HTML5 bootstrap templates made by{" "}
            <a href="https://colorlib.com" className="text-blue-500">
              Colorlib
            </a>
          </p>
          <button className="mt-4 px-6 py-2 border border-black">
            View Portfolio
          </button>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Designer"
          className="max-w-md ml-10"
        />
      </div>
    </div>
  );
};

export default App;
