import React from 'react';
import img from '../../public/spices.JPG';

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-20 sm:py-28 my-10 text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A482C] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="my-5 sm:my-7 space-y-2 sm:space-y-3 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">Take A Video Tour To Explore</h1>
          <h1 className="text-2xl sm:text-3xl font-bold">Our Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* Video 1 */}
          <div className="relative w-full pb-[56.25%] h-0 border-2 border-white rounded-md transition-all duration-300 hover:border-[#d4883c] hover:scale-105">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Repeat for each video */}
          <div className="relative w-full pb-[56.25%] h-0 border-2 border-white rounded-md transition-all duration-300 hover:border-[#d4883c] hover:scale-105">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative w-full pb-[56.25%] h-0 border-2 border-white rounded-md transition-all duration-300 hover:border-[#d4883c] hover:scale-105">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative w-full pb-[56.25%] h-0 border-2 border-white rounded-md transition-all duration-300 hover:border-[#d4883c] hover:scale-105">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
