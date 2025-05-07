"use client";

import { Instagram, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center py-16">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-5xl font-bold text-center mb-8">About Me</h1>

        <section className="flex flex-col items-center text-center">
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Hello! I’m Kalkidan Behailu, a passionate software engineering student at Debre Berhan University,
            currently in my junior year. I specialize in web and mobile development and enjoy tackling new challenges
            to enhance my skills. I’m eager to take on real-world projects and grow in the tech industry.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Our platform offers a range of learning resources, certifications, and interactive tools to help you achieve
            your goals. Let's take the next step in your learning journey together!
          </p>
        </section>

        <section className="mt-12 flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/kalkidan-behailu-989144318/" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <FaLinkedinIn size={32} />
          </a>
          <a href="https://github.com/KALU56" target="_blank" rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition">
            <FaGithub size={32} />
          </a>
          <a href="https://t.me/Kal1272" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition">
            <FaTelegramPlane size={32} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="mailto:kalkidanbehailu55@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition">
            <Mail className="w-8 h-8" />
          </a>
        </section>

        <section className="mt-16 text-center text-sm text-black/60 dark:text-white/60">
          <p>&copy; 2025 Kalkidan Behailu. All rights reserved.</p>
        </section>
      </div>
    </main>
  );
}
