import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import NishantPic from "../assets/Nishant.png";

const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] text-gray-200 flex items-center pt-20 px-6 md:px-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h3 className="text-violet-500 font-mono text-lg mb-4 tracking-wider">
            Hi, my name is
          </h3>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Nishant{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-400">
              Choudhary.
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-400 mb-8 h-12 md:h-auto">
            I build{" "}
            <TypeAnimation
              sequence={[
                "Full-Stack Web Apps",
                2000,
                "MERN Stack Solutions",
                2000,
                "Scalable Backend APIs",
                2000,
                "Modern UI/UX Experiences",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-violet-400"
            />
          </h2>

          <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed font-light">
            I am a{" "}
            <span className="text-white font-medium">
              Computer Science Engineering student
            </span>{" "}
            at SATI, Vidisha. I specialize in the{" "}
            <span className="text-violet-300">MERN Stack</span> and focus on
            writing clean, maintainable code. With{" "}
            <span className="text-violet-300">240+ LeetCode problems</span>{" "}
            solved, I bring strong logic to building real-world applications.
          </p>

          <div className="flex flex-wrap gap-5 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToProjects}
              className="group px-8 py-4 bg-violet-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-violet-700 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex gap-6 text-2xl text-gray-500 items-center">
              <a
                href="https://github.com/csnishant"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all hover:-translate-y-1">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/csnishant"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-all hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a
                href="mailto:cs.nishantchoudhary@gmail.com"
                className="hover:text-red-400 transition-all hover:-translate-y-1">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image with Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center">
          {/* Animated Glow Behind Image */}
          <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-violet-600/20 rounded-full blur-[80px] animate-pulse" />

          <div className="relative z-10 w-64 h-64 md:w-[400px] md:h-[400px]">
            {/* Border Frame Effect */}
            <div className="absolute inset-0 border-2 border-violet-500/30 rounded-[3rem] rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-500" />

            {/* Image Container */}
            <div className="w-full h-full rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent backdrop-blur-sm">
              <img
                src={NishantPic}
                alt="Nishant Choudhary"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-110"
              />
            </div>

            {/* Floating Experience Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-5 -right-5 bg-[#111] border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl">
              <p className="text-violet-400 font-bold text-xl">2026</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                Graduating
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Graduation Badge */}
      <div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-3 text-gray-500 text-sm font-mono opacity-60">
        <FaGraduationCap className="text-violet-500 text-xl" />
        <span>B.Tech CSE @ SATI Vidisha</span>
      </div>
    </section>
  );
};

export default Hero;
