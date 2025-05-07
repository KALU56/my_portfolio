"use client";

// Header Component
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md w-full shadow-lg rounded-lg">
    <div className="mx-auto flex items-center justify-between py-4 px-10 max-w-screen-xl w-full">
      <nav className="flex space-x-6 font-medium">
        <Link href="/" className="hover:text-green-500 dark:hover:text-green-400 transition">Home</Link>
        <Link href="#projects" className="hover:text-green-500 dark:hover:text-green-400 transition">Projects</Link>
        <Link href="#about" className="hover:text-green-500 dark:hover:text-green-400 transition">About Me</Link>
        <Link href="https://docs.google.com/document/d/1NZJRafnTgymFY0MDmAT-WRZReSluIOmYAkdAoQRiXuY/edit?usp=sharing" download className="hover:text-green-500 dark:hover:text-green-400 transition">Resume</Link>
      </nav>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default Header;