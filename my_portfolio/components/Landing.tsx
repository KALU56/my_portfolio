"use client";

import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Landing = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between pl-205 py-24 px-10 max-w-screen-xl min-h-screen"
    >
      {/* Left - Text */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <h1 className="text-5xl sm:text-6xl font-bold mt-2">
          I'm <br /> Kalkidan <span className="text-green-400">Behailu</span>
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          I excel at crafting elegant digital experiences with modern technologies.
        </p>

        <div className="flex items-center justify-center sm:justify-start space-x-4 mt-8">
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <a href="/path/to/your/cv.pdf" download>
              Download CV
            </a>
          </Button>

          {/* Socials */}
          <div className="flex space-x-3">
            {[FaLinkedinIn, FaGithub, FaTwitter, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-muted-foreground hover:text-green-400 transition"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Profile Picture */}
      <div className="sm:w-1/2 flex justify-center mt-6 sm:mt-0">
        <div className="relative w-40 h-40 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-green-400 overflow-hidden">
          <img
            src="/path/to/your/image.jpg"
            alt="Kal Behailu"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
