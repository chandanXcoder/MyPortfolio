import React from "react";
import { motion } from "framer-motion";
import { Globe, Github, Layout, Users, ShoppingBag } from "lucide-react";

const projects = [
  {
    title: "The Takshsila Library",
    description: "A modern self-study zone website for Takshsila Library built with clean UI and responsive design.",
    icon: <Globe size={20} />,
    link: "https://takshsila-library.vercel.app/",
    github: "https://github.com/yourusername/takshsila-library",
    image: "/images/takshsila-library.png",
  },
  {
    title: "Hair cut Zone",
    description: "An elegant fashion & grooming themed website showcasing modern style trends.",
    icon: <ShoppingBag size={20} />,
    link: "https://trim-trend.vercel.app/",
    github: "https://github.com/yourusername/trim-trend",
    image: "/images/trim-trend.png",
  },
  {
    title: "Pradhan Mntri Awash Yojna",
    description: "A portfolio of creative website designs and concepts developed by Chandan.",
    icon: <Layout size={20} />,
    link: "https://chandan-websites.netlify.app/",
    github: "https://github.com/yourusername/chandan-websites",
    image: "/images/chandan-websites.png",
  },
  {
    title: "The Hungry Snake Game",
    description: "A collaborative team project website with responsive UI and modern design.",
    icon: <Users size={20} />,
    link: "https://chandan-team.netlify.app/",
    github: "https://github.com/yourusername/chandan-team",
    image: "/images/chandan-team.png",
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

        {/* Projects List */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-indigo-500/50 transition hover:scale-[1.02] max-w-4xl mx-auto h-[28rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Image Section on top */}
              {project.image && (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow text-center lg:text-left justify-center">
                <div className="mb-2 text-indigo-400 flex justify-center lg:justify-start">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
