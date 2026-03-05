import React, { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import { useCart } from "../../../Provider/useCart";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        {/* Left: Logo & Desktop Menu */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className="text-2xl cursor-pointer flex items-center">
            <img src={logo} alt="Sakura" className="h-16 w-auto mr-2" />
          </NavLink>


          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {/* Dropdown Menu */}
            <li
              className="relative py-2 group cursor-pointer flex items-center gap-1 hover:text-[#b06d72]"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              Browse <ChevronDown size={14} />
              {/* Dropdown Content */}
              {shopOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-50 rounded-md py-3 animate-in fade-in slide-in-from-top-2">
                  <p className="px-4 py-2 hover:bg-pink-50 hover:text-[#b06d72] transition">
                    Serums
                  </p>
                  <p className="px-4 py-2 hover:bg-pink-50 hover:text-[#b06d72] transition">
                    Cleansers
                  </p>
                  <p className="px-4 py-2 hover:bg-pink-50 hover:text-[#b06d72] transition">
                    Moisturizers
                  </p>
                  <p className="px-4 py-2 hover:bg-pink-50 hover:text-[#b06d72] transition">
                    Sunscreen
                  </p>
                </div>
              )}
            </li>

            <li className="hover:text-[#b06d72] cursor-pointer transition">
              Collections
            </li>
            <li className="hover:text-[#b06d72] cursor-pointer transition">
              About
            </li>
            <li className="hover:text-[#b06d72] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Right: Icons & Auth Button */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-4 text-gray-600">
            <Search size={20} className="cursor-pointer hover:text-[#b06d72]" />
            <div
              className="relative cursor-pointer hover:text-[#b06d72]"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d1a2a4] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Auth Button */}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#b06d72] transition active:scale-95"
          >
            {isLogin ? "Sign Out" : "Sign Up"}
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-right">
          <ul className="flex flex-col gap-4 font-medium text-gray-800">
            <li className="border-b pb-2">Browse</li>
            <li className="border-b pb-2">Collections</li>
            <li className="border-b pb-2">About</li>
            <li className="border-b pb-2">Contact</li>
          </ul>

          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <Search size={22} />
              <div className="relative" onClick={() => navigate("/cart")}>
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#d1a2a4] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="bg-black text-white px-8 py-2 rounded-full"
            >
              {isLogin ? "Sign Out" : "Sign Up"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
