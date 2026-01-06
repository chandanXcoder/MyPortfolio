import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  FileCode2,
  Database,
  GitBranch,
  Github,
  Layers,
  TerminalSquare,
  Flame,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <Globe size={30} /> },
  { name: "CSS", icon: <Layers size={30} /> },
  { name: "JavaScript", icon: <FileCode2 size={30} /> },
  { name: "Node.js", icon: <Database size={30} /> },
  { name: "React.js", icon: <Code2 size={30} /> },
  { name: "Tailwind CSS", icon: <TerminalSquare size={30} /> },
  { name: "Git", icon: <GitBranch size={30} /> },
  { name: "GitHub", icon: <Github size={30} /> },
  { name: "Firebase", icon: <Flame size={30} /> },
];

const Skill = () => {
  return (
    <section
      id="skills"
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
          My Skills
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center h-32 md:h-36 bg-white border border-black/20 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-4"
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl border border-black/20 mb-3 text-black">
                {skill.icon}
              </div>
              <p className="text-gray-800 font-medium text-sm md:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
