import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050414] text-white">
      <div className="pointer-events-none fixed inset-0 soft-grid opacity-70" />
      <BlurBlob position={{ top: "18%", left: "16%" }} size={{ width: "28rem", height: "28rem" }} />
      <BlurBlob position={{ top: "55%", left: "88%" }} size={{ width: "24rem", height: "24rem" }} />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),linear-gradient(180deg,rgba(5,4,20,0)_0%,#050414_88%)]" />
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
