"use client";

import { Instagram, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from Next.js

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Hello! My name is Kalkidan Behailu. I am a software engineering student at Debre Berhan University,
        currently in my junior year focusing on web and mobile development. I am passionate and dedicated to learning and growing in the software development field. I&rsquo;m always eager to take on new challenges and expand my skill set. I am currently seeking opportunities to apply my knowledge and gain practical experience in the industry.
      </p>
      <p className="text-lg mb-4">
        Our platform offers diverse courses, certifications, interactive learning, and progress tracking tools to support every learner's journey.
      </p>
      <p className="text-lg mb-8">
        Thank you for being a part of our community. Let&rsquo;s grow together!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/kalkidan-behailu-989144318/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-green-400 transition"
        >
          <FaLinkedinIn size={22} />
        </a>
        <a
          href="https://github.com/KALU56"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-green-400 transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://t.me/Kal1272"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-green-400 transition"
        >
          <FaTelegramPlane size={22} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-pink-500 transition"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="mailto:kalkidanbehailu55@gmail.com"
          aria-label="Email"
          className="text-muted-foreground hover:text-red-500 transition"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}