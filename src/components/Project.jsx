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
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Pradhan Mantri Awas Yojana",
    description:
      "A clean and simple personal website showcasing profile details, work experience, contact information, and testimonials.",
    icon: <Home size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://chandan-websites.netlify.app/",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "The Hungry Snake Game",
    description:
      "A classic Snake Game. Control the snake with arrow keys, eat food to grow, and avoid crashing into walls or yourself.",
    icon: <Gamepad2 size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://chandan-team.netlify.app/",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Hair Cut Zone (Baraily)",
    description:
      "A modern and stylish salon website with booking features, showcasing services and customer-friendly UI.",
    icon: <Scissors size={28} />,
    github: "https://github.com/chandanXcoder",
    demo: "https://trim-trend.vercel.app/",
    color: "from-pink-500 to-rose-600",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Grid Pattern (same as AboutMe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-indigo-950/30"></div>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-2xl bg-gray-800/40 border border-gray-700 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white mb-3 sm:mb-4 mx-auto`}
                >
                  {project.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm transition-colors duration-300 text-center"
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
};  fj
export default Project;
