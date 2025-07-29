import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_picture.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-6 sm:px-10 md:px-16 lg:px-32 font-sans bg-black text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#8245ec]">
            Ansari Rehan
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={["Frontend Developer", "Backend Developer", "Coder"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            I'm a passionate Full Stack Web Developer, skilled in building
            responsive, scalable, and user-friendly applications using the MERN
            stack (MongoDB, Express.js, React.js, Node.js). I enjoy turning
            complex problems into clean and efficient code. With a strong focus
            on performance and design, I aim to build digital experiences that
            leave a lasting impact. I'm currently sharpening my development
            skills through real-world projects and preparing myself for exciting
            opportunities in the tech industry.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1NRAQ_Sh8WDkDdvFrwC5AgUA20Ht0QeNA/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rehan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
