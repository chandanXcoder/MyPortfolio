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
        "service_95yquh3",          // ✅ Service ID
        "template_xx3ck1i",         // ✅ YOUR TEMPLATE ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "GXwNWdXSVXgTdWUHp"          // ✅ Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
          setSubmitStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-transparent to-indigo-950/40"></div>

      <div className="relative max-w-2xl w-full z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8"
        >
          Get in Touch
        </motion.h2>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-950/70 border border-gray-700 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-950/70 border border-gray-700 rounded-lg"
            />

            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-950/70 border border-gray-700 rounded-lg text-gray-300"
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
              className="w-full px-4 py-3 bg-gray-950/70 border border-gray-700 rounded-lg resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><Twitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram /></a>
          <a href="mailto:yourgmail@gmail.com"><Mail /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
