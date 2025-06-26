import React from "react";

const Certificates = () => {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 "
      data-aos="fade-up"
    >
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          className="w-full h-80 p-3  border border-l-pink-700 border-t-purple-700 rounded-sm shadow-md
          shadow-blue-700"
        >
          <img
            data-aos="fade-right"
            src={`/Certificates/C${index + 1}.webP`}
            className="w-full h-72 object-cover rounded-md"
            key={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Certificates;
