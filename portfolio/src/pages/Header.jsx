import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">Kalu</div>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.485-9.485l-.707.707M3.515 12.485l-.707.707M21 12h-1M4 12H3m9.485-8.485l-.707-.707M12.485 20.485l-.707-.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293a8 8 0 11-11.586 0 6 6 0 1111.586 0z" />
            </svg>
          )}
        </button>

        {/* Resume Button */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Resume
        </button>
      </div>
    </header>
  );
};

export default Header;
