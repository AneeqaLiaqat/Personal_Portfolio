import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";

const MySkills = [
  {
    icon: <FaCode />,
    count: "50+",
    title: "Total Projects",
    desc: "Diverse web projects.",
  },
  {
    icon: <LiaCertificateSolid />,
    count: 5,
    title: "CERTIFICATES",
    desc: "Recognized achievements.",
  },
  {
    icon: <TbWorld />,
    count: 3,
    title: "YEARS OF EXPERIENCE",
    desc: "Building digital solutions.",
  },
];
const About = () => {
  return (
    <div className="w-full flex flex-col gap-10 pt-4">
      {/* About Me Section */}
      <div
        className="w-full md:w-lg flex flex-col items-center justify-center sm:mx-auto"
        data-aos="fade-in"
      >
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-sm sm:text-lg text-center text-light-gray">
          Transforming ideas into digital experiences
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between  ">
        {/* Left Section */}
        <div
          className="w-full  lg:w-2/3 order-2 md:order-1 mt-5 sm:mt-0"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-white mt-5 sm:mt-0">
            Hello, I'm
          </h2>
          <h3 className="text-2xl text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-semibold">
            Aneeqa Liaqat
          </h3>
          <p className="text-light-gray mt-2 leading-relaxed">
            I am a passionate{" "}
            <span className=" text-lg text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold">
              Graphic Designer{" "}
            </span>
            with expertise in{" "}
            <strong>Adobe Photoshop, Illustrator, and InDesign</strong>. I
            specialize in creating visually compelling designs that make an
            impact. My focus areas include branding, digital art, and UI/UX
            elements, ensuring every design tells a story.
          </p>

          {/* Education */}
          <div className="mt-6" data-aos="zoom-in">
            <h2 className="text-xl font-semibold text-purple-400">Education</h2>
            <p className="text-gray-400">
              🎓 <strong>Bachelor’s in Computer Science</strong>
            </p>
            <p className="text-gray-500">
              University of Sarogdha | 2022 - 2026
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-xl font-semibold text-pink-400">What I Do</h2>
            <ul className="mt-2 space-y-2 text-gray-300 list-disc ml-5">
              <li>
                <strong>Graphic Design:</strong> Logos, branding, and social
                media graphics.
              </li>
              <li>
                <strong>Illustration & Digital Art:</strong> Creative concepts
                brought to life.
              </li>
              <li>
                <strong>Marketing Graphics:</strong> Visuals for digital
                marketing campaigns.
              </li>
            </ul>
          </div>

          {/* Buttons with AOS Animation */}
          <div
            className="flex gap-4 mt-6 sm:mt-4 ml-1"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <a href="/MY_CV.pdf" download="Aneeqa_CV.pdf">
              <button
                className="
                hover:scale-105 transition 
                px-4 py-2 bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] font-semibold text-soft-white rounded-md shadow-md
              flex gap-2 items-center"
              >
                <IoNewspaperOutline />
                Download CV
              </button>
            </a>
            <a href="#portfolio">
              <button
                className="
                hover:scale-105 transition 
                px-4 py-2 border border-purple-600 flex gap-2 items-center font-bold rounded-md shadow-md
             bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text "
              >
                <FaCode className="text-soft-white  mt-1" />
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* Profile Image with Zoom-in Effect */}
        <div
          data-aos="zoom-in"
          data-aos-duration="0"
          className="mt-4 lg:w-1/3 sm:mt-0 order-1 sm:order-2 w-full flex  justify-center sm:justify-end "
        >
          <img
            src="/P1.jpeg"
            className="w-72 h-72 object-fit  rounded-full shadow-2xl  shadow-purple-900 hover:scale-105 transition"
            alt="Profile"
          />
        </div>
      </div>

      {/* Skills / Achievements Grid */}
      <div className="grid sm:grid-cols-3 gap-5 " data-aos="fade-up">
        {MySkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63]  rounded-md p-3 flex flex-col gap-2 hover:scale-105 transition"
          >
            <div className="flex justify-between">
              <div className="w-10 h-10 bg-[#87a3a3] rounded-full flex items-center justify-center">
                <p className="text-xl">{skill.icon}</p>
              </div>
              <p
                className="text-soft-white  font-bold text-xl"
                data-aos="zoom-in"
              >
                {skill.count}
              </p>
            </div>
            <div data-aos="fade-in">
              <p className="capitalize text-soft-white  font-semibold text-lg">
                {skill.title}
              </p>
              <p className="text-light-gray text-sm">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
