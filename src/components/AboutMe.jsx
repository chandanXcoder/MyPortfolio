import React from "react";
import { motion } from "framer-motion";
import chandImage from "../assets/chand.jpg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen bg-white text-black px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 items-center gap-14">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={chandImage}
            alt="Chandan Verma"
            className="w-80 h-96 object-cover rounded-2xl border border-black/20 shadow-sm hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            I'm <span className="font-semibold text-black">Chandan Verma</span>,  
            a first-year <span className="font-semibold text-black">B.Tech Computer Science</span> student  
            at <span className="font-semibold text-black">Invertis University, Bareilly (U.P.)</span>.
          </p>

          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            I’ve always been passionate about technology and creativity. For me, development
            isn’t just about writing code — it’s about building meaningful, efficient, and
            user-focused experiences through continuous learning and experimentation.
          </p>

          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            I approach challenges with curiosity and discipline, believing that consistency
            and problem-solving are the foundation of long-term growth. Every challenge pushes
            me to improve my skills and mindset.
          </p>

          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
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
