import React from 'react';

const categories = [
  { name: 'Cleansers', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=60' },
  { name: 'Serums', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=60' },
  { name: 'Moisturizers', img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=60' },
  { name: 'Masks', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=60' },
];

const ShopByCategory = () => {
  return (
    <section className="py-10 bg-[#F9EFF1]">
      <div className="container mx-auto px-10">
        <h2 className="section-title">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-lg cursor-pointer">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xl font-medium">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;