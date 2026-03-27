import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
} from "react-icons/si";
import JobPortalImg from "../assets/JobPortal.png";
import MatchMateImg from "../assets/MatchMate.png";

const techIcons = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Express: <SiExpress className="text-white" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  JWT: <SiJsonwebtokens className="text-[#FB01FF]" />,
};

const projects = [
  {
    title: "MatchMate: Student Networking",
    subtitle: "Roommate Discovery Platform",
    description:
      "A sophisticated student networking hub. Implemented complex MongoDB aggregation pipelines to match roommates based on 15+ lifestyle parameters and real-time availability.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: MatchMateImg,
    link: "https://matchmate-rho.vercel.app/", 
    github: "https://github.com/csnishant/MatchMate",
  },
  {
    title: "Enterprise Job Portal",
    subtitle: "Recruitment Management System",
    description:
      "A full-scale recruitment platform. Features secure JWT-based multi-role authentication, advanced job indexing, and an automated application tracking system (ATS) workflow.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: JobPortalImg,
    link: "https://job-portal-website-p1.netlify.app/",
    github: "https://github.com/csnishant/Job-Portal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050505] text-white py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Ambient Light */}
      <div className="absolute top-[20%] right-0 w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-500 font-mono text-sm tracking-[0.4em] uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-center"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Works.</span>
          </motion.h2>
          <div className="w-24 h-1 bg-indigo-500 mt-6 rounded-full" />
        </div>

        {/* Projects List */}
        <div className="space-y-32 md:space-y-48">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side with Parallax/Hover Effect */}
              <div className="w-full lg:w-[55%] group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-[#0a0a0a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-4 bg-indigo-500 text-white rounded-full hover:scale-110 transition-transform">
                      <FaExternalLinkAlt size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                  <h4 className="text-indigo-400 font-mono text-sm tracking-widest uppercase">{project.subtitle}</h4>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Modern Tech Badges */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-xs font-medium backdrop-blur-md hover:bg-white/[0.08] transition-colors"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative group/btn overflow-hidden px-8 py-3 bg-indigo-600 rounded-full font-bold text-sm transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Live Preview <FaExternalLinkAlt size={12} />
                    </span>
                    <div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 border border-white/10 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;