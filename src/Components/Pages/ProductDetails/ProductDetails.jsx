import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "../../../Provider/useCart";
import Navbar from "../../Shared/Navbar/Navbar";
import Bestseller from "../LandingPage/HomeSections/Bestsellers";
import Footer from "../../Shared/Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { allProducts, isLoading } = useAllProducts(1, 100);
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);

  if (isLoading)
    return <div className="py-20 text-center font-raleway">Loading...</div>;

  const productsArray = allProducts?.data?.products || [];
  const product = productsArray.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="py-20 text-center font-raleway">
        <p>Product not found.</p>
        <button
          onClick={() => navigate("/all-products")}
          className="btn-view-all mt-4"
        >
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-raleway">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5 flex gap-4">
            <div className="flex flex-col gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-20 h-26 cursor-pointer border-2 transition-all ${selectedImg === idx ? "border-brand-black" : "border-transparent"}`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 bg-brand-gray h-[500px]  overflow-hidden">
              <img
                src={product.images[selectedImg]}
                className="w-full h-full object-cover"
                alt="main"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5">
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-brand-black text-brand-black"
                />
              ))}
              <span className="text-xs text-gray-400 ml-2">157 Reviews</span>
            </div>
            <p className="text-2xl font-bold mb-1">${product.price}</p>
            <p className="text-[10px] text-gray-400 mb-8 uppercase tracking-widest">
              Free $35+ orders
            </p>

            <div className="space-y-6 pt-6">
              <div>
                <h4 className="input-label">Details:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.details || "Everything you need in one box."}
                </p>
              </div>
              <div>
                <h4 className="input-label">Straight Up:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.STRAIGHT_UP || "Everything you need in one box."}
                </p>
              </div>
              <div>
                <h4 className="input-label">The Lowdown:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.THE_LOWDOWN ||
                    "A professional collection of beauty items."}
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                  className="p-3 border border-gray-200"
                >
                  <Minus size={14} />
                </button>
                <span className=" font-bold text-sm border border-gray-200 py-2 px-4">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 border border-gray-200"
                >
                  <Plus size={14} />
                </button>
              </div>
             
              <button
                onClick={() => addToCart(product, qty)} 
                className="btn-primary flex-1 flex justify-between items-center"
              >
                <span>Add to bag</span>
                <span>—</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Bestseller></Bestseller>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
