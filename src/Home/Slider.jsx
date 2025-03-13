import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = () => {
  const slides = [
    { id: 1, image: "https://i.ibb.co.com/yFtTYPV0/Screenshot-58-removebg-preview-2.png" },
    { id: 2, image: "https://i.ibb.co.com/bMQyC5By/Mask-group.png" },
    { id: 3, image: "https://i.ibb.co.com/wF631h2z/Screenshot-60-removebg-preview-1.png" },
    { id: 4, image: "https://i.ibb.co.com/hxmk9J4V/Group-409.png" },
    { id: 5, image: "https://i.ibb.co.com/Lh0BGfms/Group-492.png" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Default to show 3 images at once
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          425: {
            slidesPerView: 1, // 1 image visible
          },
          768: {
            slidesPerView: 2, // 2 images visible
          },
          1024: {
            slidesPerView: 3, // 3 images visible
          },
        }}
        className=""
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-64 object-contain p-6 bg-[#dddddd] rounded-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
