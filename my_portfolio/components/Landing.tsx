"use client";

import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const Landing = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center justify-center px-6 py-16 max-w-screen-md min-h-[90vh] text-center bg-paper-texture"
    >
      {/* Profile Picture at the top */}
      <div className="mb-8">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-art-red overflow-hidden mx-auto shadow-art-soft">
          <Image
            src="/profile.png" // Ensure this path is correct
            alt="Kalkidan Behailu"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-5xl sm:text-6xl font-heading text-art-dark-blue">
          I&rsquo;m <span className="text-art-red">Kalkidan Behailu</span>
        </h1>
        <p className="text-art-gray mt-4 text-lg sm:text-xl font-body leading-relaxed">
          Crafting elegant digital experiences with modern technologies.
        </p>
      </div>

      {/* Buttons and Socials */}
      <div className="mt-6 flex flex-col items-center space-y-4">
        <Button asChild className="bg-art-red hover:bg-art-dark-red px-8 py-3 text-white rounded-lg shadow-art-button transition transform hover:scale-105">
          <a href="/path/to/your/cv.pdf" download> {/* Update path to your CV */}
            Download CV
          </a>
        </Button>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/kalkidan-behailu-989144318/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-dark-blue hover:text-art-red transition"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://github.com/KALU56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-dark-blue hover:text-art-red transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://t.me/Kal1272"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-dark-blue hover:text-art-red transition"
          >
            <FaTelegramPlane size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;