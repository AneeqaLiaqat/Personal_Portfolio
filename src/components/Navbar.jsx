import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";

const Navbar = () => {
  const [isactive, setactive] = useState("@");
  return (
    <div
      className=" flex justify-around  text-soft-black items-center 
     rounded-2xl text-2xl w-92 py-2
    z-10 fixed bottom-4 left-[50%] translate-x-[-50%]
    bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63]"
    >
      <a
        href="#"
        onClick={() => setactive("@")}
        className={isactive === "@" ? "active" : ""}
      >
        <IoHomeOutline className="text-3xl" />
      </a>
      <a href="#about" onClick={() => setactive("@about")}>
        <FaUserAstronaut />
      </a>

      <a
        href="#portfolio"
        onClick={() => setactive("@portfolio")}
        className={isactive === "@portfolio" ? "active" : ""}
      >
        <RiServiceLine className="text-4xl" />
      </a>
      <a
        href="#contact"
        onClick={() => setactive("@contact")}
        className={isactive === "@contact" ? "active" : ""}
      >
        <FaSquarePhone className="text-4xl" />
      </a>
    </div>
  );
};

export default Navbar;
