import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_95yquh3",                 // SERVICE ID
        "__ejs-test-mail-service__",       // TEMPLATE ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "GXwNWdXSVXgTdWUHp"                // PUBLIC KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        () => {
          setIsSubmitting(false);
          setSubmitStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-[#f6f9fc] px-6 overflow-hidden"
    >
      {/* Soft Background Shapes */}
      <div className="absolute left-0 top-1/3 w-[480px] h-[480px] bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-[360px] h-[360px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-2xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-black tracking-tight"
        >
          Get in Touch
        </motion.h2>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-black/20 shadow-md hover:shadow-lg transition-all"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-black/20 rounded-lg outline-none focus:border-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-black/20 rounded-lg outline-none focus:border-black"
            />

            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-black/20 rounded-lg outline-none focus:border-black text-gray-700"
            >
              <option value="">Select Subject</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message *"
              rows="4"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-black/20 rounded-lg resize-none outline-none focus:border-black"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <p className="text-green-600 text-sm text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-600 text-sm text-center mt-2">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-gray-700">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:yourgmail@gmail.com"
            className="hover:text-black transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
