import React from "react";
import { FaPenNib, FaPalette, FaPrint } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MyTechnicalSkills = [
  {
    category: "Adobe Photoshop",
    skills: ["YouTube Thumbnails", "Social Media Post Design", "Posters"],
    icon: <FaPenNib className="text-green-400 text-xl" />,
  },
  {
    category: "Adobe Illustrator",
    skills: ["Business Cards", "Vector Illustrations", "Banners"],
    icon: <FaPalette className="text-blue-400 text-xl" />,
  },
  {
    category: "Adobe InDesign",
    skills: ["Printing Material"],
    icon: <FaPrint className="text-yellow-400 text-xl" />,
  },
];

const MyProfessionalSkills = [
  {
    text: "Leadership",
    percentage: 92,
  },
  {
    text: "Creative Thinking",
    percentage: 85,
  },
  {
    text: "Attention to Detail",
    percentage: 90,
  },
  {
    text: "Communication Skills",
    percentage: 88,
  },
  {
    text: "Time Management",
    percentage: 88,
  },
  {
    text: "Problem Solving",
    percentage: 80,
  },
];

const Skills = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 " data-aos="fade-up">
      {/* Technical Skills */}
      <div className="border border-pink-700 p-3 rounded-lg shadow-md shadow-blue-700">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
          Technical Skills & Tools
        </h2>
        <p className="text-light-gray text-sm mb-4">
          Below are the tools and software I use to create visually appealing
          and professional designs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MyTechnicalSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] rounded-md shadow-md text-center"
            >
              <div className="flex justify-center mb-2">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-soft-black mb-2">
                {skill.category}
              </h3>
              <ul className="text-white text-sm space-y-1">
                {skill.skills.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div className="border border-pink-700 p-6 rounded-lg shadow-md shadow-blue-700">
        <h2 className="text-2xl font-semibold mb-4 text-pink-400">
          Professional Skills
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {MyProfessionalSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-white">
                {skill.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
