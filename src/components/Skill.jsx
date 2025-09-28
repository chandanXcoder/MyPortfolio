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
  Cpu,
  Palette,
  Smartphone,
  Zap,
  Wrench,
  Target,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <Globe size={24} />, color: "from-orange-500 to-red-500", level: 95 },
      { name: "CSS3", icon: <Layers size={24} />, color: "from-blue-500 to-cyan-500", level: 90 },
      { name: "JavaScript", icon: <FileCode2 size={24} />, color: "from-yellow-400 to-amber-500", level: 88 },
      { name: "React.js", icon: <Code2 size={24} />, color: "from-sky-400 to-blue-600", level: 85 },
      { name: "Tailwind CSS", icon: <TerminalSquare size={24} />, color: "from-teal-400 to-cyan-600", level: 92 },
      { name: "Responsive Design", icon: <Smartphone size={24} />, color: "from-purple-500 to-pink-500", level: 90 },
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: <Database size={24} />, color: "from-green-500 to-emerald-600", level: 70 },
      { name: "Git", icon: <GitBranch size={24} />, color: "from-red-400 to-orange-600", level: 85 },
      { name: "GitHub", icon: <Github size={24} />, color: "from-gray-600 to-gray-900", level: 88 },
      { name: "VS Code", icon: <Code2 size={24} />, color: "from-blue-500 to-indigo-600", level: 90 },
      { name: "Chrome DevTools", icon: <Wrench size={24} />, color: "from-green-400 to-blue-500", level: 82 },
      { name: "Performance", icon: <Zap size={24} />, color: "from-yellow-500 to-orange-500", level: 75 },
    ]
  },
  {
    category: "Design & Others",
    skills: [
      { name: "UI/UX Design", icon: <Palette size={24} />, color: "from-pink-500 to-purple-500", level: 80 },
      { name: "Figma", icon: <Layers size={24} />, color: "from-purple-400 to-pink-400", level: 75 },
      { name: "Problem Solving", icon: <Target size={24} />, color: "from-emerald-500 to-teal-500", level: 90 },
      { name: "Teamwork", icon: <Cpu size={24} />, color: "from-indigo-500 to-purple-500", level: 88 },
    ]
  }
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1)_0%,_transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6"
          >
            <Cpu size={16} />
            Skills & Expertise
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Technical</span>{" "}
            <span className="text-neutral-100">Skills</span>
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-2">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + index * 0.1 + 0.5 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    {/* Skill Card */}
                    <div className="glass-effect p-6 rounded-2xl text-center space-y-4 h-full flex flex-col justify-between border border-neutral-700/50 hover:border-indigo-500/50 transition-all duration-300">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <div>
                        <h4 className="text-neutral-100 font-semibold text-lg mb-2">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-neutral-800 rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.8 }}
                            viewport={{ once: true }}
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                          />
                        </div>
                        
                        {/* Level Percentage */}
                        <p className="text-neutral-400 text-sm font-medium">
                          {skill.level}% Proficiency
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto border border-neutral-700/50">
            <h3 className="text-2xl font-bold text-neutral-100 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and continuously improving my skills. 
              Currently exploring <span className="text-indigo-400 font-semibold">Next.js</span>, 
              <span className="text-indigo-400 font-semibold"> TypeScript</span>, and 
              <span className="text-indigo-400 font-semibold"> Advanced React Patterns</span> to enhance my development capabilities.
            </p>
            
            {/* Learning Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              {["Next.js", "TypeScript", "GraphQL", "Docker", "AWS"].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium"
                >
                  Learning {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
