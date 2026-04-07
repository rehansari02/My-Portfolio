import React from "react";
import { experiences } from "../../constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0c0116] via-[#0a0119] to-[#090320] text-white overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          My professional journey and hands-on experience in building scalable and performant web applications.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Vertical Line (Desktop) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        ></motion.div>
        
        {/* Left Vertical Line (Mobile) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute md:hidden left-4 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-500"
        ></motion.div>

        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-center w-full relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Point (The Dot) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                >
                  <div className="w-full h-full rounded-full animate-ping bg-purple-400 opacity-20"></div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}
                >
                  <div
                    className="p-6 md:p-8 rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className={`flex flex-col ${isEven ? "items-start" : "md:items-end items-start"}`}>
                      {/* Logo & Basic Info */}
                      <div className={`flex flex-wrap items-center gap-5 mb-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
                        {exp.logo && (
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0f0f1c] p-2 flex-shrink-0">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain rounded-xl"
                            />
                          </div>
                        )}
                        <div className={isEven ? "text-left" : "md:text-right text-left"}>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-gray-300 mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {exp.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Skills */}
                      <div className={`flex flex-wrap gap-2 mt-2 ${isEven ? "justify-start" : "md:justify-end justify-start"}`}>
                        {exp.skills.map((skill, i) => (
                           <span key={i} className="text-xs font-medium text-purple-300 bg-[#251f38] px-2 py-1 rounded-full">
                             {skill}
                           </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer (Hidden on mobile) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
