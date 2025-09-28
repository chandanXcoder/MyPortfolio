import React from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, Calendar, Award, Users, Lightbulb } from "lucide-react";
import chandImage from "../assets/chand.jpg";

const AboutMe = () => {
  const stats = [
    { icon: Code2, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Award, label: "Certifications", value: "5+" },
    { icon: Calendar, label: "Years Learning", value: "3+" },
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 80 },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1)_0%,_transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6"
          >
            <Lightbulb size={16} />
            About Me
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Passionate</span>{" "}
            <span className="text-neutral-100">Developer</span>
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Creating exceptional digital experiences through innovative solutions and clean code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-md mx-auto"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur-2xl scale-105"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/50">
                  <img
                    src={chandImage}
                    alt="Chandan Verma"
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-indigo-400" size={24} />
                  <div>
                    <p className="text-neutral-400 text-sm">Education</p>
                    <p className="text-neutral-100 font-semibold">B.Tech CSE</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-neutral-400 text-sm">Location</p>
                    <p className="text-neutral-100 font-semibold">Uttar Pradesh</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center"
                >
                  <stat.icon className="text-indigo-400 mx-auto mb-3" size={32} />
                  <p className="text-2xl font-bold text-neutral-100 mb-1">{stat.value}</p>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main About Text */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-300 leading-relaxed"
              >
                Hi! I'm <span className="text-indigo-400 font-semibold">Chandan Verma</span>, a dedicated 
                <span className="text-indigo-400 font-semibold"> Full-Stack Developer</span> and 
                <span className="text-indigo-400 font-semibold"> B.Tech CSE student</span> at 
                Invertis University, Bareilly, Uttar Pradesh.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-300 leading-relaxed"
              >
                I specialize in creating responsive, user-friendly web applications using modern technologies 
                like <span className="text-indigo-400">React.js</span>, <span className="text-indigo-400">Tailwind CSS</span>, 
                and <span className="text-indigo-400">JavaScript</span>. I'm also expanding my skills in backend 
                technologies and UI/UX design to become a well-rounded developer.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-300 leading-relaxed"
              >
                I believe in teamwork, problem-solving, and building digital solutions that can positively 
                impact people's lives. My long-term vision is to contribute to large-scale tech innovations 
                while growing as a professional developer.
              </motion.p>
            </div>

            {/* Skills Progress */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-neutral-100 mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300 font-medium">{skill.name}</span>
                    <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
