import React from "react";
import { motion } from "framer-motion";
import { Globe, Github, Code2, Layout } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio website built with React and Tailwind CSS.",
    icon: <Layout size={28} />,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack e-commerce web app with product catalog and checkout system.",
    icon: <Globe size={28} />,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://myecommerce.com",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "React UI Components",
    description: "A reusable UI component library made with React and Tailwind.",
    icon: <Code2 size={28} />,
    github: "https://github.com/yourusername/react-ui",
    demo: "#",
    color: "from-yellow-400 to-orange-500",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0%,_transparent_60%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#312e81_0%,_transparent_50%)] opacity-40"></div>

      <div className="relative max-w-6xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white mb-4 mx-auto`}
                >
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm flex items-center gap-2"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
