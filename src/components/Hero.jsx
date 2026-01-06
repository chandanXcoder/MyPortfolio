import React from "react";
import { motion } from "framer-motion";
import chandanImage from "../assets/chandan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#f6f9fc] flex items-center overflow-hidden">

      {/* Soft Background Shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Text */}
          <p className="text-sm font-extrabold tracking-widest text-black mb-4">
            WELCOME TO MY PORTFOLIO
          </p>

          <p className="text-lg text-gray-700 mb-3">
            Hello, I’m
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-4">
            Chandan <br /> Verma
          </h1>

          <p className="text-xl text-gray-800 mb-7">
            Web Developer
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black font-medium border-b-2 border-black hover:opacity-70 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={chandanImage}
            alt="Chandan Verma"
            className="
              w-[340px] 
              md:w-[440px] 
              lg:w-[480px]
              object-cover 
              grayscale
              shadow-2xl
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
