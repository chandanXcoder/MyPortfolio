import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e293b_0%,_transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#312e81_0%,_transparent_50%)] opacity-30"></div>

      <div className="relative max-w-2xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 sm:mb-6"
        >
          Get in Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-sm sm:text-base"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="4"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all resize-none text-sm sm:text-base"
            ></textarea>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-white transition-all duration-300 text-sm sm:text-base ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 shadow-lg"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm mt-3"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
        
        {/* Social Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8"
        >
          {[
            { icon: <Github size={20} />, link: "https://github.com/" },
            { icon: <Linkedin size={20} />, link: "https://linkedin.com/" },
            { icon: <Twitter size={20} />, link: "https://twitter.com/" },
            { icon: <Instagram size={20} />, link: "https://instagram.com/" },
            { icon: <Mail size={20} />, link: "mailto:youremail@example.com" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
