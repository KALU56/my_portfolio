"use client";

import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
