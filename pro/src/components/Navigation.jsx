import React from "react";


const Navigation = () => {
  return (
    <nav className="mt-6 space-y-3 text-sm">
      {[
        "Home",
        "About",
        "Skills",
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
  );
};

export default Navigation;
