import React from "react";

const CardDefault = () => {
  return (
    <div className="mt-6 w-[300px] h-[600px] shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg">
      {/* Header with Image */}
      <div className="relative h-2/5 rounded-t-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="p-6 h-2/5 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Modern UI/UX Design
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Discover the latest trends in user interface and user experience
          design with this in-depth guide. It’s a must-read for every developer
          and designer.
        </p>
      </div>

      {/* Footer */}
      <div className="h-1/5 flex justify-center items-center p-4">
        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardDefault;
