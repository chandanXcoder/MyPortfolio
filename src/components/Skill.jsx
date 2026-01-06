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
  { name: "Firebase", icon: <Flame size={30} /> }, // 🔥 New Skill Added
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative flex items-center justify-center min-h-screen bg-white text-black px-6 py-24 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-5xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight"
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="w-full h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center rounded-2xl bg-white border border-black/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-black/20 mb-3 text-black">
                {skill.icon}
              </div>
              <p className="font-medium text-sm md:text-base text-center text-gray-800">
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
