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

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-400"
        >
          About Me
        </motion.h2>

        {/* Rectangle Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg" // 👉 apna photo "public/profile.jpg" me save kar lena
            alt="Chandan Verma"
            className="w-60 h-72 object-cover shadow-2xl rounded-lg"
          />
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Hi! I’m{" "}
          <span className="text-indigo-400 font-semibold">Chandan Verma</span>,  
          a dedicated <span className="text-indigo-400">Web Developer</span> and  
          <span className="text-indigo-400 font-semibold"> B.Tech CSE student </span>  
          at <span className="text-indigo-400">Invertis University, Bareilly, Uttar Pradesh</span>.  
          I love creating responsive, user-friendly websites and web apps that not only look
          great but also deliver real value.
        </motion.p>

        {/* Extra Personal Lines */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-md md:text-lg text-gray-400"
        >
          I specialize in <span className="text-indigo-300">Frontend Development</span> with 
          strong knowledge of <span className="text-indigo-300">React.js, Tailwind CSS, and JavaScript</span>.  
          I’m also learning backend technologies like <span className="text-indigo-300">Node.js</span> and aim to 
          grow as a full-stack developer.  
          Apart from coding, I’m passionate about <span className="text-indigo-300">UI/UX design</span>, 
          open-source projects, and continuous self-learning.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-md md:text-lg text-gray-400"
        >
          I believe in teamwork, problem-solving, and building digital solutions that can 
          positively impact people’s lives.  
          My long-term vision is to contribute to large-scale tech innovations while 
          growing as a professional developer.
        </motion.p>

        {/* Skills / Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            "HTML • CSS • JavaScript",
            "React.js • Tailwind CSS",
            "Node.js (Basics)",
            "UI/UX Design",
            "Git • GitHub • Version Control",
            "C • C++ • Python (Basics)",
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
