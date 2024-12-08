import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[rgb(51,65,85)] text-white flex flex-col items-center pt-40 mb-4">
      {/* Hi, I Am Section */}
      <div className="text-center  mb-2">
        <h1 className="text-xl font-semibold text-yellow-500">Hi, I am</h1>
        <h1 className="text-4xl font-bold mb-4">Kalkidan - behailu</h1>
        <h3 className="text-2xl text-gray-200 mb-4">I'm a Frontend Engineer</h3>
      </div>

      {/* Passionate Developer */}
      <div className="text-center mb-1">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">🌟 An Artistic Soul with a Love for Drawing 🎨</h3>
      </div>

      {/* Icons (GitHub, LinkedIn, Email) */}
      <div className="flex space-x-6 mb-6">
        <a href="https://github.com/KALU56" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-3xl hover:text-gray-400"></i>
        </a>
        <a href="https://www.linkedin.com/in/kalkidan-behailu-989144318/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-3xl hover:text-gray-400"></i>
        </a>
        <a href="https://kalkidanbehailu677@gmail.com">
          <i className="fas fa-envelope text-3xl hover:text-gray-400"></i>
        </a>
      </div>

      {/* Blog Button */}
      <div className="text-center">
        <a
          href="https://your-blog-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-yellow-500 py-2 px-6 text-lg text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300"
        >
          Check Out the Blog
        </a>
      </div>
    </div>
  );
};

export default Home;
