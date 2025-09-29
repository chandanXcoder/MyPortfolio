import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import chandanImage from "../assets/chandan.jpg";

const roles = ["Web Developer", "Open Source Contributor"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 60 : 120;
    const currentText = roles[index];
    let timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start md:items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-8 pt-24 md:pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e293b_0%,_transparent_60%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#312e81_0%,_transparent_50%)] opacity-40"></div>

      <div className="relative max-w-7xl w-full grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to my portfolio
          </h1>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full shadow-lg overflow-hidden mb-6">
            <img
              src={chandanImage}
              alt="Chandan Verma"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">
            I'm <span className="text-indigo-400">Chandan Verma</span>
          </p>

          {/* Typing Animation Role */}
          <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent h-10">
            {displayText}
            <span className="animate-pulse text-white">|</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/resume.pdf" // यहाँ अपना resume file path डालें
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white text-lg font-medium shadow-md transition-all"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-500 text-gray-200 hover:bg-gray-700 transition-all text-lg font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
