import React from 'react';

const categories = [
  { name: 'Cleansers', img: '/src/assets/images/c1.jpg' },
  { name: 'Serums', img: '/src/assets/images/c2.jpg' },
  { name: 'Moisturizers', img: '/src/assets/images/c3.jpg' },
  { name: 'Masks', img: '/src/assets/images/c4.jpg' },
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