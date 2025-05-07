"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const ProjectCard = ({ title, description, technologies, link, image }: Project) => (
  <Card className="bg-art-paper border border-art-border-gray shadow-art-card rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
    <div className="relative w-full h-56 overflow-hidden rounded-t-lg border-b-4 border-art-border-dark-gray">
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
    </div>
    <CardHeader className="px-6 pt-4">
      <CardTitle className="text-art-dark-blue font-heading text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="px-6">
      <p className="text-art-gray text-sm italic mb-4 font-body">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-art-light-gray text-art-dark-blue text-xs px-3 py-1 rounded-md border border-art-border-gray font-medium font-body"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="px-6 pb-6">
      <Button asChild className="bg-art-red hover:bg-art-dark-red text-white font-semibold text-sm px-6 py-2 rounded-md shadow-art-button transition transform hover:scale-105">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Watch Project
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Self Platform",
      description:
        "Frontend-only e-learning platform for students and instructors. Students browse and buy courses; instructors manage content and track earnings via a dashboard.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
      image: "/pro.png", // Ensure this path is correct
    },
    {
      title: "Furniture App",
      description:
        "Mobile e-commerce app for Browse and managing furniture with CRUD functionality, a favorites system, and responsive UI.",
      technologies: ["React Native", "TypeScript", "Tailwind CSS"],
      link: "#",
      image: "/mobile.jpg", // Ensure this path is correct
    },
    {
      title: "Project 3",
      description:
        "Template full-stack app using Vue.js, Express, and PostgreSQL. Designed for showcasing scalable architecture and development skills.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      image: "/images/project3.jpg", // Ensure this path exists
    },
    {
      title: "Admin Dashboard",
      description:
        "Clean, responsive admin panel to manage users, analytics, and permissions. Includes data visualization with Chart.js.",
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
      image: "/images/admin-dashboard.jpg", // Ensure this path exists
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio site built with Next.js and Tailwind CSS, animated with Framer Motion. Showcases work, skills, and contact details.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      image: "/images/portfolio.jpg", // Ensure this path exists
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-screen-xl mx-auto bg-light-canvas-texture">
      <h2 className="text-4xl text-center font-heading text-art-dark-blue mb-12 tracking-wide">
        🎨 My Creative Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;