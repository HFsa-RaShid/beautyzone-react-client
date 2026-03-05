import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      img: "/src/assets/images/slide1.jpg",
      title: "Discover your skin's true potential",
    },
    {
      img: "/src/assets/images/slide2.jpg",
      title: "Clean beauty for your natural glow",
    },
    {
      img: "/src/assets/images/slide3.jpg",
      title: "Clean beauty for your natural glow",
    }
  ];

  return (
    <div className="h-[700px] w-full">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
              {/* Image background */}
              <div className="absolute inset-0">
                <img src={slide.img} className="w-full h-full object-cover" alt="banner" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              {/* Content Box */}
              <div className="container mx-auto px-10 relative z-10 text-white ">
                <div className="max-w-xl">
                  <h1 className="text-5xl md:text-6xl  font-relaway mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg  mb-8 opacity-80">
                    Premium skincare that combines innovation with clean, effective ingredients for all skin types.
                  </p>
                  <div className="flex gap-4">
                    <NavLink to="/all-products">
                      <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">Shop Now</button>
                    </NavLink>
                    <button className="bg-white/20 backdrop-blur-md border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">About Us</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;