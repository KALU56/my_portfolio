import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[rgb(51,65,85)] text-white flex flex-col items-center pt-12">
      {/* Hi, I Am Section */}
      <div className="text-center  mb-2">
        <h2 className="text-xl font-semibold text-yellow-500">Hi, I am</h2>
        <h1 className="text-4xl font-bold mb-4">Kanishq Kancharla</h1>
        <h3 className="text-2xl text-gray-200 mb-4">I'm a Frontend Engineer</h3>
      </div>

      {/* Passionate Developer */}
      <div className="text-center mb-1">
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">I'm a Passionate Developer</h3>
      </div>

      {/* Icons (GitHub, LinkedIn, Email) */}
      <div className="flex space-x-6 mb-6">
        <a href="https://github.com/kanishq-kancharla" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-3xl hover:text-gray-400"></i>
        </a>
        <a href="https://www.linkedin.com/in/kanishq-kancharla/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-3xl hover:text-gray-400"></i>
        </a>
        <a href="mailto:kanishq@example.com">
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
