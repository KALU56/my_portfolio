import React from 'react';

const card = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Side - Photo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/path-to-your-image.jpg" // Replace with your image
            alt="Profile"
            className="rounded-lg shadow-lg max-h-[400px]"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 space-y-4 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-5xl font-bold text-black">
            <span className="block">Rosalina</span>
            <span className="block text-gray-600">Williams</span>
          </h1>
          <h2 className="text-red-500 text-xl font-semibold">UI Designer</h2>
          <p className="text-gray-700">
            Based in the Netherlands, I’m a developer and graphic designer.
            It's certainly my way to get noticed in today's marketplace.
          </p>
          <div className="text-gray-700">
            <p>📞 +31 123 456 789</p>
            <p>📧 example@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
