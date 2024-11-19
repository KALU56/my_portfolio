import React from "react";
import Navigation from "./Navigation"; // Import Navigation component
import Footer from "./Footer"; // Import Footer component

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 flex flex-col items-center text-center">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-lg font-semibold">lilu</h1>
      <p className="text-sm text-gray-500">hi there</p>

      <Navigation />  {/* Include Navigation component */}
      <Footer />  {/* Include Footer component */}
    </div>
  );
};

export default Sidebar;
