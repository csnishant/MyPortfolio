import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaTerminal,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiPostman,
  SiGit,
  SiRedux,
  SiMysql,
} from "react-icons/si";

const skillData = [
  {
    category: "Languages",
    icon: <FaTerminal />,
    skills: ["JavaScript (ES6+)", "C++", "Python", "SQL", "HTML5", "CSS3"],
    techStack: [
      { name: "JS", icon: <SiJavascript />, color: "hover:text-yellow-400" },
      { name: "C++", icon: <SiCplusplus />, color: "hover:text-blue-500" },
      { name: "Python", icon: <SiPython />, color: "hover:text-blue-400" },
      { name: "SQL", icon: <SiMysql />, color: "hover:text-orange-500" },
    ],
    accentColor: "group-hover:text-yellow-400",
    glowColor: "rgba(250, 204, 21, 0.15)",
    borderClass: "group-hover:border-yellow-400/50",
  },
  {
    category: "Frontend",
    icon: <FaCode />,
    skills: ["React.js", "Redux", "Tailwind CSS", "Responsive Design"],
    techStack: [
      { name: "React", icon: <SiReact />, color: "hover:text-cyan-400" },
      { name: "Redux", icon: <SiRedux />, color: "hover:text-purple-500" },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "hover:text-sky-400",
      },
    ],
    accentColor: "group-hover:text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.15)",
    borderClass: "group-hover:border-cyan-400/50",
  },
  {
    category: "Backend",
    icon: <FaServer />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
    techStack: [
      { name: "Node", icon: <SiNodedotjs />, color: "hover:text-green-500" },
      { name: "Express", icon: <FaServer />, color: "hover:text-gray-300" },
    ],
    accentColor: "group-hover:text-green-500",
    glowColor: "rgba(34, 197, 94, 0.15)",
    borderClass: "group-hover:border-green-500/50",
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    skills: ["MongoDB", "MySQL"],
    techStack: [
      { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-emerald-500" },
      { name: "MySQL", icon: <SiMysql />, color: "hover:text-blue-600" },
    ],
    accentColor: "group-hover:text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.15)",
    borderClass: "group-hover:border-emerald-400/50",
  },
  {
    category: "Tools & DevOps",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "Postman", "CI/CD", "Netlify", "Render"],
    techStack: [
      { name: "Git", icon: <SiGit />, color: "hover:text-orange-600" },
      { name: "Postman", icon: <SiPostman />, color: "hover:text-orange-400" },
    ],
    accentColor: "group-hover:text-orange-400",
    glowColor: "rgba(251, 146, 60, 0.15)",
    borderClass: "group-hover:border-orange-400/50",
  },
  {
    category: "CS Fundamentals",
    icon: <FaBrain />,
    skills: ["DSA (240+ LeetCode)", "OOP", "DBMS", "Networks"],
    techStack: [
      { name: "DSA", icon: <FaBrain />, color: "hover:text-purple-400" },
      {
        name: "Network",
        icon: <FaNetworkWired />,
        color: "hover:text-indigo-400",
      },
    ],
    accentColor: "group-hover:text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.15)",
    borderClass: "group-hover:border-purple-400/50",
  },
];

const SkillsRefined = () => {
  return (
    <section
      id="skills"
      className="bg-[#030303] py-24 px-6 md:px-20 overflow-hidden relative">
      {/* Background Orbs for Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Expertise
            </span>
          </motion.h2>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.4em]">
            B.Tech CSE Student @ SATI Vidisha
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skillData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative">
              {/* Animated Gradient Border Layer */}
              <div
                className={`absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div
                className={`
                relative h-full p-8 rounded-[2rem] bg-[#080808]/80 backdrop-blur-xl
                border border-white/5 transition-all duration-500 flex flex-col
                ${item.borderClass}
              `}>
                {/* Glow Effect behind icon */}
                <div
                  className="absolute top-0 left-0 w-24 h-24 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ backgroundColor: item.glowColor }}
                />

                {/* Main Icon */}
                <div
                  className={`
                  text-4xl mb-8 w-16 h-16 flex items-center justify-center rounded-2xl 
                  bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 
                  transition-all duration-500 text-gray-500 ${item.accentColor}
                  shadow-inner
                `}>
                  {item.icon}
                </div>

                <h3
                  className={`text-2xl font-bold text-white mb-6 transition-all duration-300 ${item.accentColor}`}>
                  {item.category}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mb-10 flex-grow">
                  {item.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-[10px] md:text-xs font-semibold bg-white/[0.03] text-gray-400 border border-white/5 rounded-xl group-hover:text-gray-200 group-hover:bg-white/[0.07] group-hover:border-white/10 transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Tech Icons Footer */}
                <div className="pt-6 border-t border-white/5 flex gap-6 items-center">
                  {item.techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.5, rotate: 8 }}
                      className={`text-2xl text-gray-600 transition-all duration-300 cursor-pointer ${tech.color} filter drop-shadow-sm hover:drop-shadow-[0_0_8px_currentColor]`}
                      title={tech.name}>
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsRefined;
