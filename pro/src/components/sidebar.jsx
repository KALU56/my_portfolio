import React from "react";
import Footer from "./Footer"; // Import Footer component

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-lg font-semibold">Lilu</h1>
      <p className="text-sm text-gray-500">Hi there!</p>

      {/* Navigation */}
      <nav className="mt-6 space-y-4">
        <button
          onClick={() => setCurrentPage("home")}
          className="block text-blue-500 hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("about")}
          className="block text-blue-500 hover:underline"
        >
          About
        </button>
        <button
          onClick={() => setCurrentPage("contact")}
          className="block text-blue-500 hover:underline"
        >
          Contact
        </button>
        <button
          onClick={() => setCurrentPage("skills")}
          className="block text-blue-500 hover:underline"
        >
          Skills
        </button>
      </nav>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sidebar;
