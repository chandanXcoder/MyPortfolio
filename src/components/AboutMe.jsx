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

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Hi! I’m{" "}
          <span className="text-indigo-400 font-semibold">Chandan Verma</span>,  
          a passionate <span className="text-indigo-400">Web Developer</span> and currently 
          pursuing <span className="text-indigo-400 font-semibold">B.Tech in Computer Science & Engineering</span>.  
          I enjoy building visually appealing, responsive, and functional websites that transform 
          ideas into reality. My focus is always on writing clean code and delivering quality results.
        </motion.p>

        {/* Extra Personal Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-md md:text-lg text-gray-400"
        >
          I’m also an open-source enthusiast and love sharing my projects on{" "}
          <a
            href="https://github.com/chandanXcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 underline hover:text-indigo-400 transition"
          >
            GitHub
          </a>.  
          My aim is to grow as a full-stack developer and build impactful digital products.
        </motion.p>

        {/* Skills Section with Glow & Flex Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            "HTML • CSS • JavaScript",
            "React.js • Tailwind CSS",
            "UI/UX Design",
            "C • C++ • Python (Basics)",
            "GitHub • Version Control",
          ].map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.7)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-2 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-300 cursor-default backdrop-blur-sm hover:bg-indigo-500/30 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
