import React from "react";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 mt-4  pt-4">
      <div
        className=" w-full sm:w-lg flex flex-col items-center justify-center mx-auto"
        data-aos="fade-in"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
          Contact Me
        </h1>

        <p
          className="leading-tight text-center text-sm sm:text-lg lg:w-2xl mt-2  text-medium-gray"
          data-aos="slide-up"
        >
          Have a project in mind or need a creative design? Let's work together!
          Feel free to reach out for collaborations, freelance work, or any
          inquiries.
        </p>
      </div>

      <div data-aos="zoom-in" className="mt-5">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Contact;
