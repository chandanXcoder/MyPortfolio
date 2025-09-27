import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  // Rotating Subheadings after "A Passionate"
  const rotatingTexts = [
    "Web Developer",
    "Full Stack Learner",
    "Tech Enthusiast",
    "Open Source Contributor",
    "UI/UX Designer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingTexts.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)]"></div>

      <div className="text-center z-10 px-4">
        {/* Welcome Line */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          👋 Welcome to My Amazing Website
        </motion.h1>

        {/* Profile Photo */}
        <motion.img
          src="/profile.jpg"
          alt="Chandan Verma"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 border-2 border-indigo-400 shadow-lg object-cover"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-100 flex justify-center gap-2 flex-wrap"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>A Passionate</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-indigo-400"
            >
              {rotatingTexts[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-lg transition text-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-medium shadow-lg transition text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
