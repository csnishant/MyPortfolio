import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
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
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* Left Side: Professional Hook */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            Contact
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Let’s craft your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500">
              next vision.
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-md font-light">
            I'm currently looking for new opportunities and collaborations. If
            you have a project in mind or just want to say hi, my inbox is
            always open.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:cs.nishantchoudhary@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition-colors group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/50">
                <FaEnvelope />
              </div>
              <span className="font-medium">cs.nishantchoudhary@gmail.com</span>
            </a>

            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://linkedin.com/in/csnishant",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/csnishant",
                  label: "GitHub",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/0 hover:shadow-indigo-500/20">
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -mr-16 -mt-16" />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-indigo-400/80 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nishant Choudhary"
                className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-600 font-light"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-indigo-400/80 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="yourname@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-600 font-light"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-indigo-400/80 ml-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Hi Nishant, I'd like to discuss a project..."
                className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-600 resize-none font-light"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-white/5 hover:shadow-indigo-500/20">
              {loading ? "Transmitting..." : "Send Message"}
              {!loading && <FaPaperPlane className="text-xs" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
