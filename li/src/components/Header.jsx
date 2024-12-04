import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center p-4 bg-[rgb(51,65,85)] shadow-md shadow-gray-800 sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">Kal.</div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:flex-1 lg:justify-center`} // Center the nav items on larger screens
      >
        <ul className="flex flex-col lg:flex-row justify-center gap-6">
          <li>
            <a
              href="#about"
              className="text-white text-lg font-oswald hover:text-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="text-white text-lg font-oswald hover:text-gray-300"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-lg font-oswald hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
