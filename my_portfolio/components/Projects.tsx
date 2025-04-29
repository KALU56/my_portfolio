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

const ProjectCard = ({ title, description, technologies, link, image }: Project) => {
  return (
    <Card className="transition-colors">
      <div className="w-full h-48 overflow-hidden rounded-t-md relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-green-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-base mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-secondary text-foreground text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projectData: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of the project that highlights the main features and purpose of the project.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "#",
      image: "/images/project1.jpg",
    },
    {
      title: "Project 2",
      description: "This is another project description. It can highlight something different, like a different stack or concept.",
      technologies: ["Next.js", "MongoDB", "TypeScript"],
      link: "#",
      image: "/images/project2.jpg",
    },
    {
      title: "Project 3",
      description: "Description for the third project. Make sure the project descriptions are clear and informative.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 px-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
