import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import useAllProducts from "../../../Hooks/useAllProducts";
import { useCart } from "../../../../Provider/useCart";



const Bestseller = () => {
  const { allProducts, isLoading } = useAllProducts(1, 100);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (isLoading)
    return (
      <div className="text-center py-20 font-raleway">
        Loading Bestsellers...
      </div>
    );

  const productsArray = allProducts?.data?.products || [];
  const bestSellers = productsArray.slice(0, 4);

  return (
    <section className="section-padding container mx-auto">
      <div className="flex justify-between items-end mb-2 pb-4">
        <h2 className="section-title mb-0">Bestsellers</h2>
        <NavLink to="/all-products" className="btn-view-all inline-block">
          View all products →
        </NavLink>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bestSellers.map((product) => (
          <div
            key={product._id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <div className="product-card-img mb-4 card-image-wrapper">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-white text-brand-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-black hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">
              {product.category || "Sakura"}
            </p>
            <h3 className="sub-section-title">{product.name}</h3>

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-primary text-primary" />
              ))}
              <span className="text-[10px] text-gray-400 ml-1">4.9 (150)</span>
            </div>

            <p className="text-xl font-bold text-brand-black">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestseller;
