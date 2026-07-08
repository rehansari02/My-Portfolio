import React from "react";
import { SkillsInfo } from "../../constant";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Tools I use to build polished products</h2>
          <p className="section-copy">A practical stack for building responsive frontends, APIs, databases, and deployment-ready full stack applications.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SkillsInfo.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-white">{category.title}</h3>
                <span className="shrink-0 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-200">{category.skills.length} skills</span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.08]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-2 shadow-lg shadow-black/20">
                      <img src={skill.logo} alt={`${skill.name} logo`} className="h-full w-full object-contain" />
                    </div>
                    <span className="text-sm font-extrabold leading-tight text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
