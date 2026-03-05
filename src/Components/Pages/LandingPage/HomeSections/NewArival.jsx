import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import useAllProducts from "../../../Hooks/useAllProducts";
import { useCart } from "../../../../Provider/useCart";



const NewArrivals = () => {
  const { allProducts, isLoading } = useAllProducts(1, 100);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  const productsArray = allProducts?.data?.products || [];
  const newArrivals = [...productsArray].reverse().slice(0, 4);

  return (
    <section className="section-padding container mx-auto">
      <div className="flex justify-between items-end mb-2 pb-4">
        <h2 className="section-title mb-0">New Arrivals</h2>
        <NavLink to="/all-products" className="btn-view-all inline-block">
          View all products →
        </NavLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <div className="card-image-wrapper ">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="card-overlay" />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="btn-cart-center"
              >
                Add to Cart
              </button>
            </div>
            <p className="input-label">{product.category}</p>
            <h3 className="sub-section-title text-base truncate">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mb-2">
              <Star
                size={10}
                className="fill-brand-primary text-brand-primary"
              />
              <span className="text-[10px] text-gray-400 ml-1">New</span>
            </div>
            <p className="text-xl font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
