import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="text-indigo-400">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-400" size={28} />
              <p className="text-lg">chandan.verma@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-400" size={28} />
              <p className="text-lg">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-400" size={28} />
              <p className="text-lg">Chhattisgarh, India</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 font-semibold transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
