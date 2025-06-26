import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaBehanceSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { profileLinks } from "./GetInTouch";
const Home = () => {
  return (
    <div className="w-full lg:min-h-screen flex flex-col">
      {/* Name with fade-in effect */}
      <span
        className="text-pink-500
      font-bold text-xl ml-1"
        data-aos="fade-in"
      >
        Aneeqa Liaqat
      </span>

      <div className="flex-1 mt-20 lg:mt-0 flex flex-col  gap-0 md:flex-row items-center justify-between order-1 sm:order-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2" data-aos="fade-up">
          <div className="flex flex-col lg:gap-2 font-bold text-3xl lg:text-5xl ">
            <span className="text-soft-white"> Creative</span>
            <span className="bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
              Graphic Designer
            </span>
          </div>
          <p className="  font-normal mt-1 text-medium-gray leading-relaxed">
            Crafting visually stunning and impactful designs that bring ideas to
            life.Specializing in branding, digital illustrations, UI/UX design,
            and social media graphics.
          </p>
          <p className="text-sm font-normal  text-medium-gray "></p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col gap-2"
          >
            <div className="flex gap-6 mt-3">
              <a
                href="#portfolio"
                className="px-9 py-2 flex gap-2 items-center bg-black custom-multi-shadow text-soft-white rounded-md
              hover:scale-105 transition"
              >
                <IoNewspaperOutline />
                Projects
              </a>
              <a
                href="#contact"
                className="hover:scale-105 transition px-9 py-2 flex gap-2 items-center bg-black custom-multi-shadow text-soft-white rounded-md"
              >
                <IoIosContact className="text-lg" />
                Contact
              </a>
            </div>
            <div className="flex gap-3 text-3xl text-center  mt-6 text-soft-white ml-1">
              <a
                href={profileLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehanceSquare className="custom-multi-shadow  cursor-pointer" />
              </a>
              <a
                href={profileLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="custom-multi-shadow  cursor-pointer" />
              </a>
              <a
                href={profileLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="custom-multi-shadow  cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image with zoom-in effect */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" hidden md:block"
        >
          <img
            src="/P2.webP"
            className="w-full h-full object-fit  lg:w-72 md:h-72 shadow-2xl  rounded-full  shadow-purple-900 hover:scale-105 transition-all"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
