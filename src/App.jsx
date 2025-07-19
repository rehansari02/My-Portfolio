import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import BlurBlob from "./BlurBlob";
function App() {
  return (
    <div className="main bg-[#050414] ">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="realtive pt-20 ">
        <Navbar />
        <About />
        <Skill />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
