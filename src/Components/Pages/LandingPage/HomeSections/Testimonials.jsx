import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, RefreshCw } from 'lucide-react'; // আইকন যোগ করা হয়েছে
import useAllReviews from '../../../Hooks/useAllReviews';

const Testimonials = () => {
    // isLoading চেক করা জরুরি যাতে ডাটা আসার আগে এরর না দেয়
    const { reviews, isLoading, refetch } = useAllReviews();

    // সমাধান ১: লোডিং স্টেট হ্যান্ডেল করা
    if (isLoading) {
        return <div className="py-20 text-center font-raleway">Loading Reviews...</div>;
    }

    // সমাধান ২: reviews যদি null হয় তবে খালি অ্যারে [] হিসেবে ধরা
    const reviewsData = reviews || [];

    return (
        <div className="py-20 bg-white">
            <div className="text-center mb-12 relative">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">3940+ Happy Users</p>
                <h2 className="text-4xl font-serif text-[#a68269]">Don't just take our words</h2>
                
                {/* Refetch Button (ঐচ্ছিক: ডাটা আপডেট করার জন্য) */}
                <button 
                    onClick={() => refetch()} 
                    className="absolute right-10 top-0 p-2 hover:rotate-180 transition-transform duration-500"
                    title="Refresh Reviews"
                >
                    <RefreshCw size={18} className="text-gray-300" />
                </button>
            </div>

            <div className="container mx-auto px-6">
                {reviewsData.length > 0 ? (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{ 768: { slidesPerView: 2 } }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="pb-16 testimonial-swiper"
                    >
                        {reviewsData.map((rev) => (
                            <SwiperSlide key={rev._id || rev.id}>
                                <div className="flex flex-col md:flex-row items-center gap-8 p-6">
                                    <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                        <img 
                                            src={rev.image} 
                                            alt={rev.name} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={14} 
                                                    className={i < (rev.rating || 5) ? "fill-[#d4a0a7] text-[#d4a0a7]" : "text-gray-200"} 
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic mb-6 leading-relaxed">
                                            "{rev.comment || rev.text}"
                                        </p>
                                        <h4 className="font-bold text-gray-800">{rev.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center text-gray-400">No reviews found.</p>
                )}
            </div>
        </div>
    );
};

export default Testimonials;