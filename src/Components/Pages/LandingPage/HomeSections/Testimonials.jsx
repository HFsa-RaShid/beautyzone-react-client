import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

const Testimonials = () => {

  const reviews = [
    { id: 1, name: "Devon Lane", text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.", image: "https://i.ibb.co/6R5X9xS/user1.jpg" },
    { id: 2, name: "Devon Lane", text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.", image: "https://i.ibb.co/m0Xp0yX/user2.jpg" },
    { id: 3, name: "Devon Lane", text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.", image: "https://i.ibb.co/m0Xp0yX/user2.jpg" },
    { id: 4, name: "Devon Lane", text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.", image: "https://i.ibb.co/m0Xp0yX/user2.jpg" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">3940+ Happy Users</p>
        <h2 className="text-4xl font-serif text-[#a68269]">Don't just take our words</h2>
      </div>

      <div className="container mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="pb-16 testimonial-swiper"
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-6">
                <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={rev.image} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#d4a0a7] text-[#d4a0a7]" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{rev.text}"</p>
                  <h4 className="font-bold text-gray-800">{rev.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonials;