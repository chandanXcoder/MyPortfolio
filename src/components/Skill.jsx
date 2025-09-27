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
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <Globe size={32} />, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: <Layers size={32} />, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: <FileCode2 size={32} />, color: "from-yellow-400 to-amber-500" },
  { name: "Node.js", icon: <Database size={32} />, color: "from-green-500 to-emerald-600" },
  { name: "React.js", icon: <Code2 size={32} />, color: "from-sky-400 to-blue-600" },
  { name: "Tailwind CSS", icon: <TerminalSquare size={32} />, color: "from-teal-400 to-cyan-600" },
  { name: "Git", icon: <GitBranch size={32} />, color: "from-red-400 to-orange-600" },
  { name: "GitHub", icon: <Github size={32} />, color: "from-gray-600 to-gray-900" },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0%,_transparent_60%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#312e81_0%,_transparent_50%)] opacity-40"></div>

      <div className="relative max-w-5xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-36 h-36 flex flex-col items-center justify-center rounded-2xl bg-gray-800/40 border border-gray-700 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all duration-300"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-white mb-3`}
              >
                {skill.icon}
              </div>
              <p className="text-white font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
