import { motion } from "framer-motion";
import { FaCode, FaRocket, FaVideo, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-indigo-400" />,
    title: "Full-Stack Development",
    subtitle:
      "Building robust MERN stack applications with clean architecture.\nSpecializing in scalable REST APIs and responsive UIs.",
  },
  {
    icon: <FaVideo className="text-pink-500" />,
    title: "VFX & Digital Media",
    subtitle:
      "High-end 4K video editing and realistic CGI/VFX production.\nTransforming concepts into viral social media content.",
  },
  {
    icon: <FaChartLine className="text-green-400" />,
    title: "Digital Marketing (CREVONX)",
    subtitle:
      "Strategic brand growth and lead generation through CREVONX.\nOptimizing social media presence for maximum impact.",
  },
  {
    icon: <FaRocket className="text-yellow-400" />,
    title: "Automation & Tech Solutions",
    subtitle:
      "Leveraging OCI AI and modern tools to automate workflows.\nImproving efficiency with smart tech integration.",
  },
];

export default function Service() {
  return (
    <div
      id="services"
      className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1a1a2e_0%,transparent_70%)] opacity-50" />

      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Expertise & Services
          </h2>
          <p className="text-gray-400 mt-4 font-mono text-sm tracking-widest uppercase">
            Bridging Technology & Creativity
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          {services.map((service, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  className={`
                    w-full md:w-[70%] p-8 rounded-3xl my-4
                    bg-white/[0.03] backdrop-blur-xl border border-white/10
                    hover:bg-white/[0.06] hover:border-white/20
                    transition-all duration-500 group shadow-2xl
                    ${isLeft ? "md:self-start" : "md:self-end"}
                  `}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-5xl p-4 rounded-2xl bg-white/[0.05] border border-white/5 shadow-inner">
                      {service.icon}
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mt-3 text-sm md:text-base whitespace-pre-line leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* iOS Style Curved Connector Line */}
                {idx < services.length - 1 && (
                  <div className="hidden md:block h-20 w-px bg-gradient-to-b from-indigo-500/50 to-transparent my-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
