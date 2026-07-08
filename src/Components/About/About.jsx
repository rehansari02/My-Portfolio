import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "../../constant";
import profileImage from "../../assets/profiles.jpeg";

const getStats = () => [
  { value: `${projects.length}`, label: "Projects built" },
  { value: "MERN", label: "Core stack" },
  { value: "2026", label: "BCA graduate" },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const stats = getStats();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const image = (
    <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_90px_rgba(130,69,236,0.35)] sm:h-80 sm:w-80 lg:h-[25rem] lg:w-[25rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/25 via-transparent to-fuchsia-500/25" />
      <img src={profileImage} alt="Ansari Rehan" className="relative h-full w-full rounded-[1.5rem] object-cover object-[center_25%]" />
    </div>
  );

  return (
    <section id="about" className="section-shell flex min-h-screen items-center pt-32">
      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="section-kicker">Full Stack Developer</span>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I am <span className="gradient-text block">Ansari Rehan</span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            I build as a <span className="text-violet-300"><Typewriter words={["Frontend Developer", "Backend Developer", "MERN Stack Developer"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={45} delaySpeed={1400} /></span>
          </h2>

          <p className="section-copy max-w-2xl text-base sm:text-lg">
            I build responsive, scalable, and user-friendly web applications with React, Node.js, Express, and MongoDB. My focus is clean UI, smooth interactions, practical performance, and code that can grow with real products.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://drive.google.com/file/d/1QAoV__e0yWgHHgH3EKDO-WYSK0bWMYxW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#080719] shadow-[0_18px_50px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(168,85,247,0.35)]">
              Download CV
              <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:bg-white/[0.08]">
              View Projects
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4">
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs font-medium text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }} className="relative">
          <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
          {isMobile ? image : <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1200} scale={1.02} transitionSpeed={1200}>{image}</Tilt>}
          <div className="glass-card animate-float absolute -bottom-5 left-4 rounded-2xl px-4 py-3 sm:left-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">Available for</p>
            <p className="text-sm font-bold text-white">Web development work</p>
          </div>
          <div className="absolute -right-1 top-6 flex flex-col gap-3 sm:right-6">
            <a href="https://github.com/rehansari02" target="_blank" rel="noopener noreferrer" className="glass-card rounded-full p-3 text-white transition hover:-translate-y-1 hover:text-violet-200"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rehan-ansari-5a49b1316" target="_blank" rel="noopener noreferrer" className="glass-card rounded-full p-3 text-white transition hover:-translate-y-1 hover:text-violet-200"><FaLinkedin /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

