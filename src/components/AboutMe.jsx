import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b,_transparent_70%)] opacity-40 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-400"
        >
          About Me
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Hi! I’m <span className="text-indigo-400 font-semibold">Chandan Verma</span>, 
          a passionate <span className="text-indigo-400">Web Developer</span> who loves 
          building clean, modern, and responsive websites.  
          I enjoy turning ideas into reality through code and creating 
          digital experiences that inspire.
        </motion.p>

        {/* Skills / Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-300">
            HTML • CSS • JavaScript
          </span>
          <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-300">
            React.js • Tailwind CSS
          </span>
          <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-300">
            UI/UX Design
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
