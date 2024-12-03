import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-[rgb(51,65,85)] shadow-md shadow-gray-800">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">Kal.</div>
      
      {/* Navigation */}
      <nav className="flex-1 text-center">
        <ul className="flex justify-center gap-6">
          <li><a href="#about" className="text-white text-lg font-oswald hover:text-gray-300">About</a></li>
          <li><a href="#project" className="text-white text-lg font-oswald hover:text-gray-300">Project</a></li>
          <li><a href="#contact" className="text-white text-lg font-oswald hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
