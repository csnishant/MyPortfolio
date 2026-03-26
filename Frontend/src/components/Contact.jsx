import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Let's build something{" "}
            <span className="text-indigo-500">extraordinary</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Whether you have a question about **MatchMate** [cite: 25] or want
            to collaborate with **CREVONX**, feel free to reach out. I'm always
            open to discussing new projects and creative ideas.
          </p>

          <div className="flex gap-6">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com/crevonx" },
              {
                icon: <FaLinkedinIn />,
                link: "https://linkedin.com/in/esnishant",
              },
              { icon: <FaGithub />, link: "https://github.com/esnishant" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nishant Choudhary"
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.05] border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
              {loading ? "Sending..." : "Send Message"}
              {!loading && <FaPaperPlane className="text-sm" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
