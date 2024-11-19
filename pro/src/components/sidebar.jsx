import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 flex flex-col items-center text-center">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-lg font-semibold">Jackson Ford</h1>
      <p className="text-sm text-gray-500">UI/UX Designer in Philippines</p>

      {/* Navigation */}
      <nav className="mt-6 space-y-3 text-sm">
        {[
          "Home",
          "About",
          "Services",
          "Skills",
          "Education",
          "Experience",
          "Work",
          "Blog",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="block text-gray-600 hover:text-gray-900 transition"
          >
            {item}
          </a>
        ))}
      </nav>

      <footer className="mt-auto text-xs text-gray-400">
        <p>&copy; 2018 All rights reserved</p>
        <p>
          Template by{" "}
          <a href="https://colorlib.com" className="text-blue-500">
            Colorlib
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
