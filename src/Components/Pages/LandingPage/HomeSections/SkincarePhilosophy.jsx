

import React from 'react';

const SkincarePhilosophy = () => {
    return (
        <section className="bg-[#ede4d3] overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch container mx-auto ">
                
                {/* Left Side: Content */}
                <div className="md:w-1/2 py-16 px-4 md:px-10 flex flex-col justify-center">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2a2a2a] mb-8">
                            Our Skincare Philosophy
                        </h2>
                        <div className="space-y-6 text-gray-700 text-sm md:text-[15px] leading-relaxed font-raleway">
                            <p>
                                Seoul Mirage was born from a deep appreciation for Korean skincare innovation 
                                and the belief that effective products should be accessible to everyone.
                            </p>
                            <p>
                                We combine time-tested Korean ingredients with modern science to create 
                                formulations that deliver visible results. Each product is meticulously crafted to 
                                honor the tradition of the multi-step skincare ritual while fitting seamlessly into 
                                your daily routine.
                            </p>
                        </div>
                        <button className="mt-10 bg-white text-black px-10 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-transparent hover:border-black transition-all active:scale-95 shadow-sm">
                            About Us
                        </button>
                    </div>
                </div>

                {/* Right Side: Image spanning full height and edge */}
                <div className="md:w-1/2 px-10">
                    <img 
                        src="/images/product.jpg" 
                        alt="Skincare Products" 
                        className="full h-full min-h-[400px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default SkincarePhilosophy;