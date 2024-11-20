import React from "react";

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="mt-6 space-y-2">
      <button
        onClick={() => setCurrentPage("home")}
        className="block w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
      >
        Home
      </button>
      <button
        onClick={() => setCurrentPage("about")}
        className="block w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
      >
        About
      </button>
      <button
        onClick={() => setCurrentPage("skills")}
        className="block w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
      >
        Skills
      </button>
      <button
        onClick={() => setCurrentPage("contact")}
        className="block w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
      >
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
