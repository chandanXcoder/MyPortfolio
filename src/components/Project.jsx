import React from "react";
import { motion } from "framer-motion";
import { Globe, Code, Smartphone, Database, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio built using React.js and TailwindCSS with smooth animations.",
    icon: <Globe size={28} />,
    link: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce Store",
    description: "An e-commerce web app with product listing, cart, and checkout features using React and Node.js.",
    icon: <Database size={28} />,
    link: "https://your-ecommerce-link.com",
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Mobile UI Clone",
    description: "A responsive mobile UI clone built with React Native and styled-components.",
    icon: <Smartphone size={28} />,
    link: "#",
    github: "https://github.com/yourusername/mobile-ui-clone",
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to open-source projects on GitHub by fixing bugs and adding new features.",
    icon: <Code size={28} />,
    link: "#",
    github: "https://github.com/yourusername",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-indigo-500/50 transition hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className={`mb-4 text-indigo-400`}>{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg transition"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
