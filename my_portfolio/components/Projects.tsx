"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  image,
  isLeftAligned,
}: Project & { isLeftAligned: boolean }) => (
  <motion.div
    className={`flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 w-full ${
      isLeftAligned ? "sm:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, x: isLeftAligned ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {/* Circle with Project Image */}
    <div className="w-28 h-28 sm:w-40 sm:h-40 relative rounded-full border-4 border-art-border-dark-gray overflow-hidden flex-shrink-0 shadow-lg">
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        className="object-cover"
      />
    </div>

    {/* Right Side: Project Title, GitHub Link, and Description */}
    <div
      className={`flex-1 p-6 rounded-lg shadow-xl dark:bg-black bg-white dark:text-white text-art-dark-blue bg-opacity-90 backdrop-filter backdrop-blur-sm`}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
      <div
        className={`flex items-center ${
          isLeftAligned ? "sm:justify-end" : "sm:justify-start"
        } space-x-2 mb-4`}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-art-dark-blue dark:text-white hover:text-art-red transition duration-300"
          aria-label={`GitHub repository for ${title}`}
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-sm sm:text-base italic font-body leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div
        className={`flex flex-wrap gap-2 mt-4 ${
          isLeftAligned ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-art-light-gray dark:bg-art-dark-gray text-art-dark-blue dark:text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-art-border-gray font-medium font-body shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Self Platform",
      description:
        "Frontend-only e-learning platform for students and instructors. Students browse and buy courses; instructors manage content and track earnings via a dashboard.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/KALU56/E-Self.git",
      image: "/pro.png",
    },
    {
      title: "Furniture App",
      description:
        "Mobile e-commerce app for browsing and managing furniture with CRUD functionality, a favorites system, and responsive UI.",
      technologies: ["React Native", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/KALU56/React_Native_learn.git",
      image: "/mobile.jpg",
    },
    {
      title: "Project 3",
      description:
        "MY PORTFOIO.",
      technologies: ["next-js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/KALU56/my_portfolio.git",
      image: "/portfoio.png",
    },
    {
      title: "Blood Bank Management System",
      description:
        "The importance of a reliable blood donation system cannot be overstated. Blood banks play a crucial role in healthcare, ensuring that safe and sufficient blood supplies are available in times of need. This system offers digital solutions for donor registration, health monitoring, and appointment scheduling.",
      technologies: ["Python", "Tkinter", "SQL Server"],
      link: "https://github.com/KALU56/admin-dashboard",
      image: "/bloodbank.png",
    },
    {
      title: "poromodoro extention",
      description: "poromodoro website is a productivity tool that helps users manage their time effectively. It uses the Pomodoro Technique, which involves breaking work into intervals, traditionally 25 minutes in length, separated by short breaks.",
      technologies: ["react vite", "Tailwind CSS"],
      link: "https://github.com/KALU56/my_promodoro.git",
      image: "/poromodoro.png",
    },
      {
      title: "abel-begena",
      description: "this is for abel begena .it is like portfolio website for abel begena.becase of i wan to beuld the project then i work this ", 
      technologies: ["next-js", "Tailwind CSS"],
      link: "https://github.com/KALU56/-Abel-Begena.git",
      image: "/abel.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-screen-xl mx-auto bg-light-canvas-texture dark:bg-dark-canvas-texture relative"
    >
      <h2 className="text-4xl sm:text-5xl text-center font-heading text-art-dark-blue dark:text-white mb-16 tracking-wide">
        🎨 My Creative Projects
      </h2>

      <div className="flex flex-col space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-art-dark-blue dark:bg-art-light-gray absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10 shadow-md">
              <span className="text-white font-bold text-lg">{index + 1}</span>
            </div>
            <ProjectCard {...project} isLeftAligned={index % 2 === 0} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
