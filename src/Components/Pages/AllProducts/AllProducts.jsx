import React, { useState, useEffect } from "react";
import { Star, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import useAllProducts from "../../Hooks/useAllProducts";
import Navbar from "../../Shared/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Provider/useCart";


const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const { allProducts, isLoading, refetch } = useAllProducts(currentPage);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState("All Product");
  const [sortOption, setSortOption] = useState("Featured");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const categories = ["All Product", "Serums", "Sun Care", "Toners", "Cleansers", "Kits", "Moisturizers", "Makeup"];

  
  useEffect(() => {
    refetch();
  }, [activeCategory, sortOption, currentPage, refetch]);

  if (isLoading) return <div className="text-center py-20 font-raleway">Loading Products...</div>;

  
  const productsArray = allProducts?.data?.products || []; 
  const totalPages = allProducts?.data?.totalPages || 1;

  
  let displayProducts = activeCategory === "All Product" 
    ? productsArray 
    : productsArray.filter(p => p.category === activeCategory);

  // সর্টিং লজিক
  if (sortOption === "Price: Low to High") {
    displayProducts = [...displayProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price: High to Low") {
    displayProducts = [...displayProducts].sort((a, b) => b.price - a.price);
  }

  // পেজ চেঞ্জ হ্যান্ডেলার
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0); // পেজ চেঞ্জ হলে উপরে স্ক্রল হবে
    }
  };

  return (
    <div className="bg-white min-h-screen font-raleway">
      <Navbar />
      
      {/* Filter Bar */}
      <div className="bg-[#fdf2e3]">
        <div className="container mx-auto flex flex-wrap px-6 md:px-12 py-3 justify-between items-center border-b border-orange-100">
          <div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }} // ক্যাটাগরি চেঞ্জ হলে ১ নম্বর পেজে ফিরবে
                className={`text-[13px] font-medium transition-all whitespace-nowrap pb-1 ${
                  activeCategory === cat ? "text-brand-black border-b-2 border-brand-black" : "text-gray-500 hover:text-brand-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <div onClick={() => setShowSortMenu(!showSortMenu)} className="flex items-center gap-2 text-[13px] font-medium text-brand-black cursor-pointer">
              Sort : <span className="text-gray-500 flex items-center gap-1">{sortOption} <ChevronDown size={14} /></span>
            </div>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl z-50 rounded-md py-2 text-xs">
                {["Featured", "Price: Low to High", "Price: High to Low"].map((opt) => (
                  <div key={opt} onClick={() => { setSortOption(opt); setShowSortMenu(false); }} className="px-4 py-2 hover:bg-beige cursor-pointer">{opt}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="section-padding container mx-auto">
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1">
            {displayProducts.map((product) => (
              <div key={product._id} className="group cursor-pointer">
                <div className="card-image-wrapper" onClick={() => navigate(`/product/${product._id}`)}>
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="card-overlay" />
                  <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="btn-cart-center flex items-center gap-2 text-[10px]">Add to Cart</button>
                </div>
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">{product.category}</p>
                  <h3 className="text-[15px] font-medium text-brand-black mb-1 truncate">{product.name}</h3>
                  <p className="text-[18px] font-bold text-brand-black mb-2">${product.price}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold">4.9</span>
                    <Star size={10} className="fill-brand-black text-brand-black" />
                    <span className="text-[10px] text-gray-400">(150)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">No products found.</div>
        )}

        {/* Dynamic Pagination UI */}
        <div className="mt-20 flex justify-center items-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 border border-gray-200 rounded-sm ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <ArrowLeft size={14} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 text-[12px] border flex items-center justify-center transition-all ${
                  currentPage === pageNum ? "bg-brand-black text-white border-brand-black" : "border-gray-200 hover:bg-gray-50 text-gray-600"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 border border-gray-200 rounded-sm ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;