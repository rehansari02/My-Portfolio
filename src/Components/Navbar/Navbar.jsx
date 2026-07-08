import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const current = menuItems.findLast((item) => {
        const section = document.getElementById(item.id);
        return section && section.offsetTop - 140 <= window.scrollY;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-white/10 bg-[#080719]/80 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-white/5 bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <button onClick={() => handleMenuItemClick("about")} className="cursor-pointer text-sm font-black tracking-tight text-white sm:text-base">
          <span className="text-violet-400">&lt;</span>Ansari<span className="text-violet-400">/</span>Rehan<span className="text-violet-400">&gt;</span>
        </button>

        <ul className="hidden items-center gap-1 rounded-full border border-white/15 bg-[#09071a]/85 p-1 text-[15px] font-bold text-white shadow-lg shadow-black/20 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-white text-[#09071a] shadow-lg"
                    : "hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/rehansari02" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-white">
            <FaGithub size={19} />
          </a>
          <a href="https://www.linkedin.com/in/rehan-ansari-5a49b1316" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-white">
            <FaLinkedin size={19} />
          </a>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-2xl text-white md:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 w-[calc(100%-2rem)] rounded-3xl border border-white/10 bg-[#080719]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => handleMenuItemClick(item.id)} className="rounded-2xl px-4 py-3 text-left text-gray-200 transition hover:bg-white/10 hover:text-white">
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

