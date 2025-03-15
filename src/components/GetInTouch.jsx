import React, { useState } from "react";
import { FaBehanceSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaRegMessage } from "react-icons/fa6";
import { FiSend, FiUser } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineShare } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

export const profileLinks = {
  linkedIn:
    "https://www.linkedin.com/in/aneeqa-liaqat-632697341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  instagram:
    " https://www.instagram.com/aneeqa_103?igsh=MXQzbzRkN2s4dWl0eg%3D%3D&utm_source=qr",
  behance: "https://www.behance.net/aneeqaliaqatbe",
};

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message) {
      toast.error("All fields are requires");
      return;
    }

    try {
      setLoading(true);
      const response = await emailjs.send(
        import.meta.env.VITE_GMAIL_SERVICE_ID,
        import.meta.env.VITE_GMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_GMAIL_PUBLIC_KEY
      );
      if (response.status !== 200) {
        throw new Error("Somethig went wrong");
      }
      setFormData({ fullname: "", email: "", message: "" });
      setLoading(false);
      toast.success("Message sent successfully!");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <>
      <div
        className="border border-l-pink-700 border-t-purple-700 p-3 w-full rounded-md
        shadow-md
      shadow-blue-700 text-soft-white"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div className="flex justify-between sm:justify-normal gap-2 items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <MdOutlineShare className="text-2xl font-bold mt-1.5" />
        </div>
        <p className="mt-1 text-light-gray">
          Have something to discuss? Send me a message and let's talk
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mt-4 ">
          <div className="border border-gray-500 rounded-md items-center flex gap-2 p-2 ">
            <FiUser />
            <input
              type="text"
              placeholder="Your Fullname"
              className="border-none outline-none bg-transparent flex-1"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-500 rounded-md items-center  flex gap-2 p-2">
            <MdOutlineEmail />
            <input
              type="email"
              placeholder="Your Email"
              className="border-none outline-none bg-transparent flex-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-500 rounded-md items-start flex gap-2 p-2">
            <FaRegMessage className="mt-1" />
            <textarea
              rows={3}
              placeholder="Your Message"
              className="border-none outline-none  flex-1 resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 mt-2 py-2 bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] font-semibold text-soft-white rounded-md shadow-md
              flex gap-2 items-center justify-center"
          >
            {loading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <FiSend />
                <p>Send Message</p>
              </>
            )}
          </button>
        </form>
        <hr className="my-5  text-medium-gray" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8  gap-2 text-3xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text">
        <div className="flex  items-center justify-between">
          <div className="w-7 h-[1px] bg-purple-600 mt-4 mr-1.5"></div>
          <p>Connect with Me</p>
        </div>
      </div>
      <div className="flex gap-5 text-3xl sm:text-5xl text-center w-full pb-16 justify-center mt-8 text-soft-white ">
        <a
          href={profileLinks.behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehanceSquare className="custom-multi-shadow bounce-animation cursor-pointer" />
        </a>
        <a
          href={profileLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="custom-multi-shadow bounce-animation cursor-pointer" />
        </a>
        <a
          href={profileLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="custom-multi-shadow bounce-animation cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default GetInTouch;
