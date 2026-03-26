import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 400 && rect.bottom >= 400) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* --- TOP BRANDING --- */}
      <header className="fixed top-0 w-full z-[100] py-8 px-10 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/30 text-[10px] tracking-[0.6em] font-light uppercase">
            Nishant Choudhary
          </motion.div>
        </div>
      </header>

      {/* --- CENTER-RIGHT FLOATING NAVIGATOR --- */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-end">
        {/* Expandable Menu Items */}
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 pr-4 text-right">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                        isActive
                          ? "text-violet-400 scale-110"
                          : "text-white/30 hover:text-white"
                      }`}>
                      {link.name}
                    </motion.a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* THE MASTER GRADIENT DOT (Center Right) */}
          <motion.div
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-4 h-12 md:w-5 md:h-16 flex items-center justify-center cursor-pointer pointer-events-auto">
            {/* Pulsing Glow Layer (Light band chalu-band feel) */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full blur-md bg-gradient-to-b from-violet-600 via-fuchsia-500 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            />

            {/* Solid Gradient Core */}
            <div
              className={`w-full h-full rounded-full transition-all duration-700 ${
                open
                  ? "bg-white"
                  : "bg-gradient-to-b from-violet-500 via-purple-500 to-blue-500"
              } border border-white/20`}
            />

            {/* Visual Indicator: Tiny dot inside if closed */}
            {!open && (
              <div className="absolute w-1 h-1 bg-white rounded-full animate-bounce" />
            )}
          </motion.div>
        </div>
      </div>

      {/* --- GLOBAL BLUR OVERLAY (When Open) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[150]"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
