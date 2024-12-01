import React from "react";

const MyProject = () => {
  const projectDescription = "This is an amazing project that showcases my skills in web development.";

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
      {/* Project Photo */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Project Screenshot"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Project Description */}
      <p className="text-gray-800 dark:text-gray-300 mb-6">{projectDescription}</p>

      {/* GitHub Button */}
      <a
        href="https://github.com/your-repo-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Do you want to see Git?
      </a>
    </div>
  );
};

export default MyProject;
