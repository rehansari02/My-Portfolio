import React from "react";
import { education } from "../../constant";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="section-shell overflow-hidden">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Education</span>
          <h2 className="section-title">Academic foundation</h2>
          <p className="section-copy">My education built the programming, web development, database, and problem-solving base behind my project work.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((edu, index) => (
            <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="glass-card group rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/45">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1">
                  <img src={edu.img} alt={edu.school} className="h-full w-full rounded-xl object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-200">{edu.date}</p>
                  <h3 className="mt-1 text-lg font-black text-white">{edu.degree}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-300">{edu.school}</p>
              <span className="mt-4 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-bold text-fuchsia-200">{edu.grade}</span>
              <p className="mt-4 text-sm leading-7 text-gray-400">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
