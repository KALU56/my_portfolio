import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[rgb(51,65,85)] text-white flex flex-col lg:flex-row-reverse items-center justify-center p-6 lg:p-12">
      {/* Right Section: Profile Picture */}
      <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 lg:mb-0 lg:ml-12">
        <img
          src="https://images.pexels.com/videos/5834605/pexels-photo-5834605.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Section: About Content */}
      <div className="flex-1 text-center lg:text-left">
        {/* Header */}
        <h1 id="about" className="text-4xl font-bold mb-4">#About Me</h1>
        <h3 className="text-2xl font-semibold text-gray-300 mb-6">Welcome to my website</h3>

        {/* Paragraphs */}
        <p className="text-lg text-gray-400 mb-4">
          Hey there, I'm Kiki. Welcome to my little corner of the internet. I'm a Frontend Engineer, and I focus on building unique, intuitive interfaces and user-centric digital experiences that, well, make websites more interactive.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          Welcome to my little corner of the internet. I'm a Frontend Engineer, and I focus on building unique, intuitive interfaces and user-centric digital experiences that, well, make websites more interactive.
        </p>
        <p className="text-lg text-gray-400">
          Welcome to my little corner of the internet. I'm a Frontend Engineer, and I focus on building unique, intuitive interfaces and user-centric digital experiences that, well, make websites more interactive.
        </p>
      </div>
    </div>
  );
};

export default About;
