import React from "react";
import { motion } from "framer-motion";
import { Github, BookOpen, Home, Gamepad2, Scissors } from "lucide-react";

const projects = [
  {
    title: "Takshsila Library",
    description:
      "A comprehensive digital library platform with book management and user authentication system.",
    icon: <BookOpen size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://takshsila-library.vercel.app/",
  },
  {
    title: "Pradhan Mantri Awas Yojana",
    description:
      "A clean and simple website showcasing profile details, work experience, contact information, and testimonials.",
    icon: <Home size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://chandan-websites.netlify.app/",
  },
  {
    title: "The Hungry Snake Game",
    description:
      "A classic Snake Game. Control the snake, eat food to grow, and avoid collisions.",
    icon: <Gamepad2 size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://chandan-team.netlify.app/",
  },
  {
    title: "Hair Cut Zone (Bareilly)",
    description:
      "A modern salon website with booking features and a customer-friendly UI.",
    icon: <Scissors size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://trim-trend.vercel.app/",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-[#f6f9fc] px-6 overflow-hidden"
    >
      {/* Soft Background Shapes */}
      <div className="absolute left-0 top-1/3 w-[480px] h-[480px] bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-[360px] h-[360px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight text-black"
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-white border border-black/20 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6"
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-black/20 mb-4 mx-auto text-black">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-black">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-black text-black text-sm font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
                >
                  <Github size={16} /> Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all"
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
