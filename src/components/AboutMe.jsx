import React from "react";
import { motion } from "framer-motion";
import chandImage from "../assets/chand.jpg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b,_transparent_70%)] opacity-40 pointer-events-none"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 items-center gap-12">
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
            className="w-64 h-80 object-cover shadow-2xl rounded-xl border border-indigo-500/40"
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
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m <span className="text-indigo-400 font-semibold">Chandan Verma</span>,  
            a first-year <span className="text-indigo-400 font-semibold">B.Tech Computer Science</span> student  
            at <span className="text-indigo-400">Invertis University, Bareilly (U.P.)</span>.
          </p>

          <p className="text-md md:text-lg text-gray-400 leading-relaxed">
            I’ve always been passionate about technology and creativity, and I believe in
            using both to solve problems and create meaningful experiences. My journey as a
            developer is not just about learning code — it’s about experimenting, building,
            and growing every day.
          </p>

          <p className="text-md md:text-lg text-gray-400 leading-relaxed">
            I approach challenges with curiosity and determination, knowing that consistency
            and hard work are the keys to progress. I believe in turning ideas into reality and
            constantly pushing myself to improve, explore, and innovate.
          </p>

          <p className="text-md md:text-lg text-gray-400 leading-relaxed">
            Every project I take on is an opportunity to learn something new and make an impact,
            no matter how small. I’m dedicated to my growth, driven by curiosity, and motivated
            by the endless possibilities that technology offers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
