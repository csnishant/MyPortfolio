import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import NishantPic from "../assets/Nishant.png";

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] text-gray-200 flex items-center justify-center pt-28 pb-12 px-6 md:px-24 overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* --- HERO IMAGE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center lg:order-last group">
          {/* Pulsing Static Glow */}
          <div className="absolute w-64 h-64 md:w-[450px] md:h-[450px] bg-violet-600/20 rounded-full blur-[90px] animate-pulse" />

          {/* Hover Lightning Glow */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-fuchsia-600/30 via-violet-600/20 to-cyan-500/30 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 scale-110" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-64 h-80 md:w-[420px] md:h-[520px]">
            {/* Outer Rotating Glass Border */}
            <div className="absolute inset-0 border border-violet-500/30 rounded-[2.5rem] md:rounded-[3rem] rotate-3 scale-105 backdrop-blur-[2px] group-hover:rotate-0 transition-transform duration-700" />

            {/* Inner Rotating Border */}
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] -rotate-3 transition-transform duration-700 group-hover:rotate-0" />

            {/* Image Container */}
            <div className="w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/20 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent backdrop-blur-md shadow-2xl">
              <img
                src={NishantPic}
                alt="Nishant Choudhary"
                className="w-full h-full object-cover object-top transition-all duration-1000 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        </motion.div>

        {/* --- CONTENT SECTION --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left z-20">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="w-8 h-[1px] bg-violet-500/50"></span>
            <h3 className="text-violet-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase">
              The Digital Architect
            </h3>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-3 tracking-tighter leading-[0.9]">
            Nishant <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-300 to-indigo-600">
              Choudhary.
            </span>
          </h1>

          <div className="text-xl md:text-3xl font-bold text-gray-500 mb-8 min-h-[4rem] flex flex-wrap justify-center lg:justify-start gap-x-2 mt-4">
            <span className="opacity-80">I specialize in </span>
            <TypeAnimation
              sequence={[
                "Full-Stack Ecosystems",
                2000,
                "Scalable MERN Solutions",
                2000,
                "Cinematic Web Design",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-white border-b-2 border-violet-500/30 pb-1"
            />
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 text-sm md:text-base text-gray-400 mb-10 leading-relaxed font-light tracking-wide">
            Currently a{" "}
            <span className="text-white font-normal underline decoration-violet-500/30 underline-offset-4 italic">
              CSE student at SATI
            </span>
            . Bridging the gap between robust backend logic and fluid frontend
            motion. Driven by{" "}
            <span className="text-violet-300">Data Structures</span> and
            <span className="text-violet-300 ml-1 italic font-medium">
              Industrial-Grade Code
            </span>
            .
          </p>

          <div className="flex flex-col md:flex-row items-center gap-10 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-lg shadow-violet-500/20">
              Explore Works
            </motion.button>

            <div className="flex gap-10 md:gap-8 text-2xl md:text-3xl text-gray-500 items-center">
              <a
                href="https://github.com/csnishant"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all transform hover:-translate-y-1">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/csnishant"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-all transform hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a
                href="mailto:cs.nishantchoudhary@gmail.com"
                className="hover:text-red-400 transition-all transform hover:-translate-y-1">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Badge */}
      <div className="absolute bottom-8 left-0 right-0 lg:left-24 lg:right-auto flex items-center gap-2 text-gray-600 text-[10px] md:text-xs font-mono opacity-50 justify-center lg:justify-start tracking-wider">
        <FaGraduationCap className="text-violet-600 text-lg" />
        <span className="whitespace-nowrap italic">
          B.Tech CSE @ SATI Vidisha (2026)
        </span>
      </div>
    </section>
  );
};

export default Hero;
