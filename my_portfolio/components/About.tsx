"use client";

import { Instagram, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas-texture text-art-charcoal flex flex-col items-center justify-center py-16">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-5xl font-heading text-center mb-8 text-art-dark-blue">
          About Me
        </h1>

        <section className="flex flex-col items-center text-center">
          <p className="text-lg md:text-xl mb-6 max-w-2xl text-art-gray leading-relaxed font-body">
            Hello! I’m Kalkidan Behailu, a passionate software engineering student at Debre Berhan University,
            currently in my junior year. I specialize in web and mobile development and enjoy tackling new challenges
            to enhance my skills. I’m eager to take on real-world projects and grow in the tech industry.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-art-gray leading-relaxed font-body">
            Our platform offers a range of learning resources, certifications, and interactive tools to help you achieve
            your goals. Let's take the next step in your learning journey together!
          </p>
        </section>

        <section className="mt-12 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/kalkidan-behailu-989144318/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-gray hover:text-art-accent-green transition-colors duration-300"
          >
            <FaLinkedinIn size={32} />
          </a>
          <a
            href="https://github.com/KALU56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-gray hover:text-art-dark-blue transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://t.me/Kal1272"
            target="_blank"
            rel="noopener noreferrer"
            className="text-art-gray hover:text-art-accent-blue transition-colors duration-300"
          >
            <FaTelegramPlane size={32} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-art-gray hover:text-art-accent-pink transition-colors duration-300"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="mailto:kalkidanbehailu55@gmail.com"
            aria-label="Email"
            className="text-art-gray hover:text-art-accent-red transition-colors duration-300"
          >
            <Mail className="w-8 h-8" />
          </a>
        </section>

        <section className="mt-16 text-center text-art-light-gray text-sm font-body">
          <p>&copy; 2025 Kalkidan Behailu. All rights reserved.</p>
        </section>
      </div>
    </main>
  );
}