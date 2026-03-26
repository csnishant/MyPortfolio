import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
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
import MatchMateImg from "../assets/MatchMate.png"; // Make sure to add this asset

const techIcons = {
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-white" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  JWT: <SiJsonwebtokens className="text-pink-400" />,
};

const projects = [
  {
    title: "MatchMate: Student Networking",
    description:
      "A full-stack MERN application helping students find roommates based on lifestyle preferences, hobbies, and routines using complex MongoDB aggregation logic[cite: 25, 27, 28].",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: MatchMateImg,
    link: "#", // Add your MatchMate link here [cite: 26]
    github: "https://github.com/esnishant",
  },
  {
    title: "Job Portal Website",
    description:
      "Comprehensive platform for recruiters and students featuring JWT authentication, resume uploads, and advanced job filtering[cite: 20, 22, 23].",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: JobPortalImg,
    link: "https://job-portal-website-p1.netlify.app/",
    github: "https://github.com/esnishant",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="bg-[#050505] text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Selected <span className="text-indigo-500">Works</span>
        </h2>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col lg:flex-row items-center gap-10 bg-[#0a0a0a] border border-white/5 p-4 rounded-3xl hover:border-indigo-500/30 transition-all duration-500">
              {/* Image Side */}
              <div
                className="w-full lg:w-3/5 overflow-hidden rounded-2xl aspect-video relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === idx ? "scale-110 blur-[2px]" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredIndex === idx ? "opacity-100" : "opacity-0"
                  }`}>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.link}
                      className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-6 px-4">
                <h3 className="text-3xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed italic">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-sm font-mono">
                      {techIcons[tech]} {tech}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:underline">
                    View Live Project <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
