import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-3xl font-bold">Chandan Verma</h3>
            <p className="text-gray-300 text-lg">
              Developer & Computer Science Engineering Student
            </p>
            <p className="text-gray-400 max-w-lg">
              Specializing in modern web technologies and building clean,
              scalable and user-focused applications.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold uppercase tracking-wider">
              Get In Touch
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>📍 Bareilly, Uttar Pradesh, India</p>
              <p>📞 +91 8103077970</p>
              <p>✉️ chaandanverma@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {/* Phone */}
              <Icon
                href="tel:+918103077970"
                hover="hover:bg-gray-700"
              >
                <Phone size={20} />
              </Icon>

              {/* GitHub */}
              <Icon
                href="https://github.com/chandanXcoder"
                hover="hover:bg-gray-800"
              >
                <Github size={20} />
              </Icon>

              {/* WhatsApp */}
              <Icon
                href="https://wa.me/qr/JZO7IOKPHQNOA1"
                hover="hover:bg-green-600"
              >
                <MessageCircle size={20} />
              </Icon>

              {/* Instagram */}
              <Icon
                href="https://www.instagram.com/__mr._chand__810__"
                hover="hover:bg-pink-600"
              >
                <Instagram size={20} />
              </Icon>

              {/* LinkedIn */}
              <Icon
                href="https://linkedin.com/in/chandan-verma"
                hover="hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </Icon>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Chandan Verma</span>
          </p>
          <p>Built with React & Tailwind CSS</p>
        </div>

        {/* Back To Top */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-white text-black shadow-xl hover:bg-gray-200"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

const Icon = ({ href, hover, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`w-12 h-12 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center transition ${hover}`}
  >
    {children}
  </motion.a>
);

export default Footer;
