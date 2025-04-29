"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md w-full shadow-lg rounded-lg">
      <div className="mx-auto flex items-center justify-between py-4 px-10 max-w-screen-xl w-full">
        {/* Left - Navigation Links */}
        <nav className="flex space-x-6 font-medium">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="#projects" className="hover:text-green-400 transition">Projects</Link>
          <Link href="#about" className="hover:text-green-400 transition">About-Me</Link>
          <Link href="/resume.pdf" download className="hover:text-green-400 transition">Resume</Link>
        </nav>

        {/* Right - Mode Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
