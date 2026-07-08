import React from "react";
import { experiences } from "../../constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="section-shell overflow-hidden">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Professional journey</h2>
          <p className="section-copy">Hands-on work building responsive interfaces, APIs, and scalable full stack features with modern JavaScript tools.</p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-400 via-fuchsia-400 to-transparent md:left-1/2" />
          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, index) => {
              const right = index % 2 === 0;
              return (
                <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`relative grid md:grid-cols-2 ${right ? "md:[&>div]:col-start-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12"}`}>
                    <span className="absolute left-1.5 top-8 h-5 w-5 rounded-full border-4 border-[#050414] bg-violet-300 shadow-[0_0_30px_rgba(168,85,247,0.75)] md:left-1/2 md:-translate-x-1/2" />
                    <div className="glass-card group rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/45">
                      <div className="flex flex-wrap items-center gap-4">
                        {exp.logo && (
                          <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur">
                            <img src={exp.logo} alt={exp.company} className="h-full w-full rounded-xl object-contain" />
                          </div>
                        )}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-200">{exp.date}</p>
                          <h3 className="mt-1 text-xl font-black text-white">{exp.role}</h3>
                          <p className="text-sm font-semibold text-gray-400">{exp.company}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-gray-300">{exp.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

