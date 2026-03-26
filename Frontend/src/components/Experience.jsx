import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaLocationArrow,
  FaBuilding,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "GB Solutions India",
      role: "Web Developer Intern",
      duration: "July 2025 – August 2025",
      location: "Gwalior, India",
      points: [
        "Built responsive frontend components using React.js and Tailwind CSS.",
        "Integrated RESTful APIs with Node.js and Express.js backend.",
        "Collaborated on debugging and code refactoring with senior developers.",
        "Implemented JWT-based authentication and input validation logic.",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#030303] py-24 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="text-violet-500 font-light italic">History</span>
          </motion.h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* THE PERFECT LINE */}
          {/* Mobile: 16px from left | Desktop: exact center */}
          <div className="absolute left-[18px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-white/10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-violet-600 via-fuchsia-500 to-transparent"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Center Icon Fix */}
                {/* Iska 'left' ab line ke left coordinate se match karega */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 bg-[#030303] border-2 border-violet-500 rounded-full z-20 flex items-center justify-center text-violet-500 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  <FaBriefcase size={14} />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`pl-12 md:pl-0 w-full md:w-[45%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="relative p-6 bg-[#0a0a0a] border border-white/5 rounded-[2rem] hover:border-violet-500/40 transition-all duration-500 group shadow-2xl">
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <span className="w-fit px-3 py-1 bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-violet-500/20">
                          Internship
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-[11px] font-mono">
                          <FaCalendarAlt className="text-violet-500/50" />
                          {exp.duration}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 mb-6 text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                          <FaBuilding className="text-violet-500" />
                          <span className="text-gray-200">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FaLocationArrow className="text-violet-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                            <FaCheckCircle className="text-violet-500 mt-1 flex-shrink-0 text-xs" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
