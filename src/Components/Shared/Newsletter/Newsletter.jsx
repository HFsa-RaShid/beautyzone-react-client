import React from "react";

const Newsletter = () => {
  return (
    <div className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 font-raleway">Join Our Community</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm">
        Subscribe to our newsletter for exclusive offers, skincare tips, and new product announcements.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full sm:flex-1 px-6 py-4 border border-gray-200 rounded-full outline-none focus:border-secondary"
        />
        <button className="bg-[#d4a0a7] text-white px-10 py-4 rounded-full font-medium hover:bg-[#b06d72] transition-all">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Newsletter;