import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const MyProjects = [
  {
    title: "Business Cards",
    desc: "Professional and unique business card designs for your brand identity.",
    link: "business-cards",
  },
  {
    title: "Shirts Designs",
    desc: "Unique and stylish t-shirt designs for casual and formal wear.",
    link: "shirts-designs",
  },
  {
    title: "Thumbnails",
    desc: "A curated collection of design previews for videos and media.",
    link: "thumbnails",
  },
  {
    title: "Logos",
    desc: "Creative and custom logo designs to represent your brand.",
    link: "logos",
  },
  {
    title: "Wedding Cards",
    desc: "Beautiful wedding invitation cards for your special day.",
    link: "wedding-cards",
  },
  {
    title: "Social Media Posts",
    desc: "Eye-catching social media posts for engagement and growth.",
    link: "social-media-posts",
  },
  {
    title: "Illustrations And Mug Prints",
    desc: "Complete branding solutions including packaging and logos.",
    link: "illustrations-and-mug-prints",
  },
];

const Projects = () => {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6"
      data-aos="fade-up"
    >
      {MyProjects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col relative gap-0 p-3 pt-4 items-start border border-l-pink-700 border-t-purple-700 rounded-sm shadow-md
          shadow-blue-700"
        >
          <h2
            className="sm:text-xl font-bold text-soft-white leading-relaxed"
            data-aos="fade-right"
          >
            {project.title}
          </h2>
          <p className="text-medium-gray" data-aos="zoom-in">
            {project.desc}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3  my-5 mb-12">
            {[1, 2, 3, 4, 5, 6].map((_, imgIndex) => (
              <img
                key={imgIndex}
                src={`/${project.title}/${imgIndex + 1}.webp`}
                alt={project.title}
                className=" min-w-24 lg:min-w-30  w-full h-20 object-fit  rounded-md"
              />
            ))}
          </div>
          <Link
            to={`/category/${project.link}`}
            className="text-blue-600 flex items-center gap-1  absolute bottom-3 left-3"
          >
            Explore More
            <span>
              <RiShareBoxFill />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
