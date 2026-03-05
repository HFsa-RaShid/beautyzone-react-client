import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <NavLink to="/" className="text-2xl cursor-pointer flex items-center">
            <img src={logo} alt="Sakura" className="h-16 w-auto mr-2" />
          </NavLink>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Scelerisque lectus habitasse
            adipiscing.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-pink-400">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">
            Shop
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>All Products</li>
            <li>Bestsellers</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">
            About
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 text-[10px] text-gray-400 border-t pt-8">
        © 2024 Seoul Mirage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
