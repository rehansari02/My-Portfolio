import React, { useState } from "react";
import { projects } from "../../constant";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="section-shell">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work with real product thinking</h2>
          <p className="section-copy">A focused showcase of frontend clones, full stack CRUD apps, API-driven products, and responsive interfaces.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="glass-card group overflow-hidden rounded-[1.5rem] text-left transition duration-300 hover:-translate-y-2 hover:border-violet-400/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-[#050414]/10 to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-bold text-white backdrop-blur">Case study</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-white transition group-hover:text-violet-200">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 28, scale: 0.96 }} transition={{ duration: 0.25 }} className="glass-card max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[1.75rem]" onClick={(event) => event.stopPropagation()}>
              <div className="sticky top-0 z-10 flex justify-end bg-[#080719]/75 p-4 backdrop-blur-xl">
                <button onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-[#080719]">Close</button>
              </div>
              <div className="p-5 pt-0 md:p-8 md:pt-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full rounded-3xl object-cover md:h-96" />
                <h3 className="mt-7 text-3xl font-black text-white md:text-4xl">{selectedProject.title}</h3>
                <p className="mt-4 text-base leading-8 text-gray-300">{selectedProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-white/15 px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#080719]">View Code</a>
                  )}
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-white px-6 py-3 text-center font-extrabold text-[#080719] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35)]">View Live</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
