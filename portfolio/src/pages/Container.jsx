import React from "react";
import CardDefault from "./card/"; // Correctly import the card component

const Container = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Name */}
        <div className="text-4xl font-bold mb-4">Liluya</div>

        {/* Introduction */}
        <div className="text-2xl mb-2">Hi, I'm a Developer</div>

        {/* Description */}
        <div className="text-center max-w-md mb-4">
          <p className="text-lg">
            I am passionate and the best developer. Do you want a responsive and
            user-friendly website? Please DM me.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
          >
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.936v-4.834c0-1.153-.02-2.636-1.604-2.636-1.605 0-1.85 1.253-1.85 2.553v4.917h-3.505V9h3.368v1.561h.048c.47-.888 1.621-1.825 3.336-1.825 3.567 0 4.224 2.348 4.224 5.401v6.315zM5.337 7.433a2.073 2.073 0 01-2.072-2.073c0-1.142.93-2.072 2.072-2.072a2.073 2.073 0 010 4.145zM7.823 20.452H2.851V9h4.972v11.452zM22.225 0H1.771C.791 0 0 .771 0 1.724v20.551C0 23.228.791 24 1.771 24h20.451C23.209 24 24 23.228 24 22.275V1.724C24 .771 23.209 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
          >
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l11.198-8.33a1.003 1.003 0 00-.198-1.688L1 3.047c-.393-.219-.867.198-.6.666L12 13.065zm-2-2.924L.3 2.998a.998.998 0 00-1.097-.053L1 3.598v13.04c0 .551.449 1 1 1h20c.551 0 1-.449 1-1V3.598L2 2.946c-.395-.217-.874.2-.607.668L10 10.14zM3.002 18H20.997c.551 0 1-.449 1-1V7.99L12 14.917 2 7.99v8.01c0 .551.449 1 1 1z" />
            </svg>
          </a>
        </div>

        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/20696122/pexels-photo-20696122/free-photo-of-two-pelicans-reflecting-in-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Component */}
        <p className="mt-8 text-xl">My Projects</p>

        {/* Cards - Responsive Layout */}
        <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-4 space-y-4 md:space-y-0">
          <CardDefault />
          <CardDefault />
        </div>
      </div>
    </>
  );
};

export default Container;
