import React from "react";
import { motion } from "framer-motion";
import {
  SiCoursera,
  SiOracle,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const Certifications = () => {
  // Professional Abstract Flower Pattern (SVG)
  const FlowerPattern = () => (
    <svg
      className="absolute right-[-10%] top-[-20%] w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
      viewBox="0 0 100 100"
      fill="currentColor">
      <path d="M50 0 C55 20 75 25 100 30 C80 35 75 55 70 80 C65 60 45 55 20 50 C40 45 45 25 50 0" />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M30 20 L70 80 M70 20 L30 80"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );

  const certs = [
    {
      title: "HTML, CSS, and JavaScript for Web Development",
      issuer: "Johns Hopkins University | Coursera",
      date: "Oct 27, 2023",
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
      date: "Jun 24, 2025",
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
      date: "Oct 10, 2025",
      icon: <SiOracle className="text-[#F80000]" />,
      tech: [{ label: "OCI AI", color: "text-red-500" }],
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=64AFBC0EE0688F05FFB9608FE9D3CFDFE1A12B59F8CFE2B0E2D767F2BF86E4C7",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-[#050505] py-20 px-4 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Certifications<span className="text-violet-500">.</span>
          </motion.h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid gap-4">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-[#0a0a0a] border border-white/[0.05] hover:border-violet-500/30 hover:bg-[#0d0d0d] transition-all duration-300 overflow-hidden">
              {/* FLOWER DESIGN BACKGROUND */}
              <div className="absolute top-0 right-0 h-full text-violet-500">
                <FlowerPattern />
              </div>

              {/* Icon Section */}
              <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-2xl md:text-3xl z-10 transition-colors group-hover:bg-white/[0.07]">
                {cert.icon}
              </div>

              {/* Info Section */}
              <div className="relative flex-grow min-w-0 z-10">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-[13px] md:text-base font-bold text-gray-100 group-hover:text-violet-400 transition-colors truncate pr-2">
                    {cert.title}
                  </h3>
                  <span className="text-[9px] md:text-[10px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <p className="text-[10px] md:text-[11px] text-gray-500 font-medium truncate max-w-[150px] md:max-w-none">
                    {cert.issuer}
                  </p>

                  {/* MOBILE RESPONSIVE BADGES */}
                  <div className="flex gap-1.5 items-center">
                    <div className="hidden md:block h-3 w-[1px] bg-white/10" />
                    <div className="flex gap-2 items-center">
                      {cert.tech.map((t, i) => (
                        <div
                          key={i}
                          className={`${t.color} text-sm md:text-lg flex items-center`}>
                          {t.icon || (
                            <span className="text-[9px] font-black uppercase tracking-tighter opacity-80">
                              {t.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative flex-shrink-0 text-gray-600 group-hover:text-violet-500 transition-all duration-300 z-10">
                {cert.link.includes(".pdf") ? (
                  <FaFilePdf className="text-sm md:text-base" />
                ) : (
                  <FaExternalLinkAlt className="text-xs md:text-sm" />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
