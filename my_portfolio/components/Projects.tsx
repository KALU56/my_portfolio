"use client";

import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, description, technologies, link }: any) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-green-500">{title}</h3>
      <p className="text-lg text-muted-foreground mt-2">{description}</p>
      <div className="flex space-x-2 mt-4">
        {technologies.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Button asChild className="bg-green-500 hover:bg-green-600">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description:
        "A brief description of the project that highlights the main features and purpose of the project.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project 2",
      description:
        "This is another project description. It can highlight something different, like a different stack or concept.",
      technologies: ["Next.js", "MongoDB", "TypeScript"],
      link: "#",
    },
    {
      title: "Project 3",
      description:
        "Description for the third project. Make sure the project descriptions are clear and informative.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
