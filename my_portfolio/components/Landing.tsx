"use client";

import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const Landing = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center justify-center px-6 py-16 max-w-screen-md min-h-[90vh] text-center bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Profile Picture */}
      <div className="mb-8">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-gray-600 dark:border-gray-400 overflow-hidden mx-auto shadow-lg">
          <Image
            src="/profile.png"
            alt="Kalkidan Behailu"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name and Description */}
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold">
          I&rsquo;m <span className="text-black dark:text-white">Kalkidan Behailu</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          Crafting elegant digital experiences with modern technologies.
        </p>
      </div>

      {/* Buttons and Socials */}
      <div className="mt-6 flex flex-col items-center space-y-4">
        <Button asChild className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-3 text-white dark:text-black rounded-lg shadow-md transition-transform hover:scale-105">
          <a href="https://docs.google.com/document/d/1aQjFiVVcPdqQa3qfYs-m-pVn3cNqEfYFo2hBNPZEu9s/edit?tab=t.0" download>
            Download CV
          </a>
        </Button>

        <div className="flex space-x-4 mt-4">
          <a href="https://linkedin.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <FaLinkedinIn size={28} />
          </a>
          <a href="https://github.com" className="hover:text-black dark:hover:text-white transition">
            <FaGithub size={28} />
          </a>
          <a href="https://t.me" className="hover:text-blue-500 dark:hover:text-blue-300 transition">
            <FaTelegramPlane size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
