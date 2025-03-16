import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "./images.json";
import { FaArrowLeft } from "react-icons/fa";

const CardsCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to format category name
  const formatCategory = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedCategory = formatCategory(category);
  console.log("cat", formattedCategory);
  const imageList = images[formattedCategory] || [];
  console.log("images", imageList);

  return (
    <div className="container mx-auto px-1 py-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-soft-white transition duration-300 mb-6 "
        data-aos="fade-right"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </button>

      {/* Title & Static Content */}
      <div className="text-center" data-aos="fade-down">
        <h1 className="text-3xl  sm:text-4xl font-bold bg-gradient-to-r from-[#673AB7] via-pink-400 to-[#E91E63] text-transparent bg-clip-text mb-3">
          {formattedCategory}
        </h1>
        <p className="text-medium-gray max-w-2xl mx-auto sm:text-lg leading-tight">
          Explore our collection of{" "}
          <span className="font-semibold">{formattedCategory}</span> designs.
          Each design is crafted with precision and creativity.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid  lg:grid-cols-2 gap-4 mt-8">
        {imageList.map((img, index) => (
          <img
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            src={img}
            alt={`${formattedCategory} ${index + 1}`}
            className="w-full h-full object-fit"
          />
        ))}
      </div>
    </div>
  );
};

export default CardsCategory;
