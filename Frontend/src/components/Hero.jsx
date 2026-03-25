import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const Hero = () => {
  // Resume se linked methods
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0a192f] text-gray-200 flex flex-col justify-center px-6 md:px-24">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="z-10">
        <h3 className="text-indigo-400 font-mono text-lg mb-4">
          Hi, my name is
        </h3>

        {/* Name from Resume  */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Nishant Choudhary.
        </h1>

        {/* Dynamic Roles based on Experience & Skills [cite: 3, 13] */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
          I build{" "}
          <TypeAnimation
            sequence={[
              "Full-Stack Web Apps",
              2000,
              "MERN Stack Solutions",
              2000,
              "Scalable Backend APIs",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-indigo-400"
          />
        </h2>

        {/* Professional Summary [cite: 3, 4, 31] */}
        <p className="max-w-xl text-lg text-gray-400 mb-8 leading-relaxed">
          I am a{" "}
          <span className="text-indigo-300">
            Computer Science student at SATI, Vidisha
          </span>{" "}
          with a passion for developing maintainable software. I specialize in
          the <span className="text-indigo-300">MERN Stack</span> [cite: 3] and
          have solved{" "}
          <span className="text-indigo-300">240+ problems on LeetCode</span> to
          sharpen my DSA skills.
        </p>

        {/* Tech Stack Pills [cite: 8, 9, 10] */}
        <div className="flex flex-wrap gap-3 mb-10 max-w-2xl">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "C++",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-mono border border-indigo-500/50 rounded text-indigo-300 bg-indigo-500/5">
              {skill}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-bold hover:bg-indigo-500/10 transition-all rounded">
            Check out my work!
          </button>

          {/* Social Links [cite: 2] */}
          <div className="flex gap-6 text-2xl text-gray-400">
            <a
              href="https://github.com/esnishant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors">
              <FaGithub title="GitHub" />
            </a>
            <a
              href="https://linkedin.com/in/esnishant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors">
              <FaLinkedin title="LinkedIn" />
            </a>
            <a
              href="mailto:cs.nishantchoudhary@gmail.com"
              className="hover:text-red-400 transition-colors">
              <FaEnvelope title="Email" />
            </a>
          </div>
        </div>
      </div>

      {/* Education Tag  */}
      <div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-2 text-gray-500 text-sm font-mono">
        <FaGraduationCap className="text-indigo-500" />
        <span>B.Tech CSE '26 | SATI Vidisha</span>
      </div>
    </section>
  );
};

export default Hero;
