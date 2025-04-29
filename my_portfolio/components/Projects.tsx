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
  <Card className="transition-colors hover:shadow-lg">
    <div className="w-full h-48 relative overflow-hidden rounded-t-md">
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        className="object-cover"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-green-600">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-base text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-secondary text-foreground text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
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
        "A frontend-only educational platform for students and instructors. Students can browse and purchase courses, while instructors manage courses, monitor student progress, and track earnings via a dedicated dashboard.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
      image: "/pro.png",
    },
    {
      title: "Furniture App",
      description:
        "A mobile e-commerce app for browsing furniture. Features include CRUD operations, a favorites page, and a responsive UI built with React Native.",
      technologies: ["React Native", "TypeScript", "Tailwind CSS"],
      link: "#",
      image: "/mobile.jpg",
    },
    {
      title: "Project 3",
      description:
        "A placeholder project with a clean structure using Vue.js, Express, and PostgreSQL. Perfect for showcasing full-stack web development skills.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
