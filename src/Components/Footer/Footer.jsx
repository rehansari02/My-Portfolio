import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const links = [
  { icon: <FaGithub />, link: "https://github.com/rehansari02" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rehan-ansari-5a49b1316" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/rehansari_02_08/" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/rehan.ansari.127888" },
];

const Footer = () => {
  return (
    <footer className="px-5 pb-10 text-white">
      <div className="section-container glass-card rounded-[1.5rem] p-6 text-center">
        <h2 className="text-xl font-black gradient-text">Ansari Rehan</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {links.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-3 text-lg text-gray-300 transition hover:-translate-y-1 hover:border-violet-400 hover:text-white">
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-500">Copyright 2026 Ansari Rehan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
