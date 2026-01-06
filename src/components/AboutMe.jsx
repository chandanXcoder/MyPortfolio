import React from "react";
import { motion } from "framer-motion";
import chandImage from "../assets/developer.png";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen bg-[#f6f9fc] flex items-center overflow-hidden px-6">

      {/* Soft Background Shapes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-[360px] h-[360px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={chandImage}
            alt="Chandan Verma"
            className="
              w-[250px] 
              md:w-[700px] 
              lg:w-[720px] 
              object-cover 
              rounded-2xl
              grayscale
              shadow-md
              hover:scale-105 
              transition-transform duration-500
            "
          />
        </motion.div>

        {/* RIGHT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm font-extrabold tracking-widest text-black mb-2">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Chandan Verma
          </h2>

          <p className="text-lg text-gray-700">
            I'm a first-year <span className="font-semibold text-black">B.Tech Computer Science</span> student  
            at <span className="font-semibold text-black">Invertis University, Bareilly (U.P.)</span>.
          </p>

          <p className="text-md md:text-lg text-gray-700">
            I’ve always been passionate about technology and creativity. For me, development
            isn’t just about writing code — it’s about building meaningful, efficient, and
            user-focused experiences through continuous learning and experimentation.
          </p>

          <p className="text-md md:text-lg text-gray-700">
            I approach challenges with curiosity and discipline, believing that consistency
            and problem-solving are the foundation of long-term growth. Every challenge pushes
            me to improve my skills and mindset.
          </p>

          <p className="text-md md:text-lg text-gray-700">
            Every project I work on is a learning opportunity. I am driven by curiosity,
            motivated by progress, and committed to turning ideas into real-world solutions
            using modern web technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
