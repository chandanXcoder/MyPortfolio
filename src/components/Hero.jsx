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
      className="relative min-h-screen flex items-center justify-center bg-white px-8 pt-24 md:pt-28 text-black overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl w-full grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Welcome to my portfolio
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            I design and build clean, modern, and scalable web experiences with
            a strong focus on performance and user experience.
          </p>
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
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border border-black/20 shadow-sm hover:scale-105 transition-transform duration-500">
            <img
              src={chandanImage}
              alt="Chandan Verma"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <p className="text-4xl md:text-5xl font-bold mb-3">
            I'm <span className="font-extrabold">Chandan Verma</span>
          </p>

          {/* Typing Animation */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 h-10">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg bg-black text-white text-lg font-medium hover:bg-gray-800 transition-all"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-all"
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
