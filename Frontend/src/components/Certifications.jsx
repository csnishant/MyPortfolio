import React from "react";
import { motion } from "framer-motion";
import {
  SiCoursera,
  SiOracle,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaExternalLinkAlt, FaFilePdf, FaMedal } from "react-icons/fa";

const Certifications = () => {
  const certs = [
    {
      title: "HTML, CSS, and JavaScript for Web Development",
      issuer: "Johns Hopkins University | Coursera",
      date: "Oct 2023",
      icon: <SiCoursera className="text-[#0056D2]" />,
      tech: [
        { icon: <SiHtml5 />, color: "text-orange-500" },
        { icon: <SiCss3 />, color: "text-blue-500" },
        { icon: <SiJavascript />, color: "text-yellow-400" },
      ],
      link: "https://coursera.org/share/cc18d1404b4c942147dfea2f3b7b6e67",
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte Australia | Forage",
      date: "Jun 2025",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-[#86BC25]">
          <path d="M1.44 14.88h3.12v3.12H1.44v-3.12zm4.8-6.72h3.12v9.84H6.24V8.16zm4.8-1.92h3.12v11.76h-3.12V6.24zm4.8 3.84h3.12v7.92h-3.12V10.08zm4.8 2.88H24v5.04h-3.12v-5.04z" />
          <circle cx="21" cy="18" r="1.5" />
        </svg>
      ),
      tech: [{ label: "JOB SIM", color: "text-[#86BC25]" }],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_JuKJpr56unTauf3CL_1750776795376_completion_certificate.pdf",
    },
    {
      title: "OCI AI Foundations Associate",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: <SiOracle className="text-[#F80000]" />,
      tech: [{ label: "OCI AI", color: "text-red-500" }],
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=64AFBC0EE0688F05FFB9608FE9D3CFDFE1A12B59F8CFE2B0E2D767F2BF86E4C7",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-[#050505] py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-[-10%] w-72 h-72 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-violet-500 mb-2">
            <FaMedal className="text-sm" />
            <span className="text-xs font-mono uppercase tracking-[0.3em]">
              Achievements
            </span>
          </motion.div>
          <div className="flex items-center gap-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Certifications<span className="text-violet-600">.</span>
            </motion.h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-violet-500/30 to-transparent mt-4" />
          </div>
        </div>

        {/* Certifications List */}
        <div className="space-y-4">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.005 }}
              className="group relative block p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/40">
              {/* Card Content */}
              <div className="relative flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl transition-all duration-300 group-hover:bg-[#0d0d0d]">
                {/* Brand Icon with Glow */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-3xl transition-all duration-500 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 shadow-inner">
                  {cert.icon}
                </div>

                {/* Textual Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                    <h3 className="text-sm md:text-lg font-bold text-gray-100 group-hover:text-white transition-colors truncate">
                      {cert.title}
                    </h3>
                    <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-[11px] md:text-xs text-gray-400 font-medium tracking-wide">
                      {cert.issuer}
                    </p>

                    {/* Tech Badges */}
                    <div className="hidden sm:flex gap-2 items-center border-l border-white/10 pl-4">
                      {cert.tech.map((t, i) => (
                        <div
                          key={i}
                          className={`${t.color} text-lg md:text-xl opacity-80 hover:opacity-100 transition-opacity`}>
                          {t.icon || (
                            <span className="text-[9px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded-sm bg-current/10">
                              {t.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Icon with Animation */}
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-gray-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  {cert.link.includes(".pdf") ? (
                    <FaFilePdf className="text-sm" />
                  ) : (
                    <FaExternalLinkAlt className="text-xs" />
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
