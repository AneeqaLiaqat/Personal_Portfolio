import React, { useState } from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import "aos/dist/aos.css";
import Skills from "./Skills";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa6";
import { RiSkypeFill } from "react-icons/ri";
const Links = [
  { icon: <FaCode />, text: "Projects" },
  { icon: <LiaCertificateSolid />, text: "Certificates" },
  { icon: <RiSkypeFill />, text: "Skills" },
];

const Portfolio = () => {
  const [Boxindex, setBoxIndex] = useState(0);

  return (
    <div className="w-full flex flex-col gap-5 mt-4  pt-4">
      {/* Portfolio Heading */}
      <div
        className="w-full sm:w-xl flex flex-col items-center justify-center mx-auto"
        data-aos="fade-in"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
          Portfolio Showcase
        </h1>

        <p
          className="text-center text-sm sm:text-lg mt-2  text-medium-gray leading-tight"
          data-aos="slide-up"
        >
          Explore my journey through projects,Certificates and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        className=" grid grid-cols-3 gap-1 bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] rounded-sm p-2 mt-5"
        data-aos="fade-up"
      >
        {Links.map((link, index) => (
          <button
            data-aos="fade-up"
            data-aos-delay={index * 200}
            onClick={() => setBoxIndex(index)}
            key={index}
            className={`${
              index === Boxindex ? "bg-purple-400" : "bg-transparent"
            } flex flex-col gap-1 items-center justify-center  cursor-pointer pb-1.5 transition-all duration-300 rounded-md p-1 sm:p-2`}
          >
            <p className="text-lg sm:text-3xl text-soft-black">{link.icon}</p>
            <p
              className={`${
                index === Boxindex ? "text-soft-white" : "text-soft-black"
              } -mt-1 text-sm sm:text-normal  font-medium`}
            >
              {link.text}
            </p>
          </button>
        ))}
      </div>

      {/* Content Sections with AOS Flip Animation */}
      <div className="mt-1">
        {Boxindex === 0 ? (
          <Projects />
        ) : Boxindex === 1 ? (
          <Certificates />
        ) : (
          Boxindex == 2 && <Skills />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
