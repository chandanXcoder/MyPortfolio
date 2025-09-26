import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Server, Smartphone, Palette, GitBranch, Github } from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code size={32} />, color: "text-orange-400" },
  { name: "CSS", icon: <Palette size={32} />, color: "text-blue-400" },
  { name: "JavaScript", icon: <Layout size={32} />, color: "text-yellow-400" },
  { name: "React.js", icon: <Smartphone size={32} />, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: <Server size={32} />, color: "text-teal-400" },
  { name: "Node.js", icon: <Database size={32} />, color: "text-green-400" },
  { name: "Git", icon: <GitBranch size={32} />, color: "text-red-400" },
  { name: "GitHub", icon: <Github size={32} />, color: "text-gray-300" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-400">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <div className={`mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
