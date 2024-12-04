import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[rgb(51,65,85)] text-white flex flex-col lg:flex-row-reverse items-center justify-center p-6 lg:p-12 ">
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
        <h1 id="about" className="text-4xl font-bold text-yellow-500 mb-4">#About Me</h1>
        <h3 className="text-2xl font-semibold text-gray-300 mb-6">Welcome to my website</h3>

        {/* Paragraphs */}
        <p className="text-lg text-gray-400 mb-4">
        Kalkidan Behailu is a second-year software student at Debre Berhan University, passionate about web development, digital art, and innovation.
        </p>
        <p className="text-lg text-gray-400 mb-4">
        Skilled in the MERN stack, C++, and hyper-realistic drawing, they blend technology and creativity in unique projects. Active in the TechTonic Tribe community, they mentor others and lead initiatives like emotion-tracking web apps and podcast games
        </p>
        <p className="text-lg text-gray-400">
        Kalkidan’s journey reflects resilience, a drive for learning, and a vision to merge art and tech for meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;
