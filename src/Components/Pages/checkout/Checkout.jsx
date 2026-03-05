import React from "react";
import { useCart } from "../../../Provider/useCart";
import Navbar from "../../Shared/Navbar/Navbar";
import { ChevronDown } from "lucide-react";
import Footer from "../../Shared/Footer/Footer";

const Checkout = () => {
  const { items } = useCart();

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shippingCost = 5.99;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-[#f5e9da] min-h-screen font-raleway">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-10">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Shipping Forms */}
          <div className="w-full lg:w-[65%] bg-white p-8 shadow-sm rounded-sm">
            <section className="mb-10">
              <h2 className="text-lg font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full name</label>
                  <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last name</label>
                  <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone</label>
                  <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Apartment, suite, etc. (optional)</label>
                <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">City</label>
                  <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">State/Province</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 p-3 appearance-none outline-none focus:border-black bg-white">
                      <option>Select</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Postal Code</label>
                  <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-black" />
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Country</label>
                <div className="relative">
                  <select className="w-full border border-gray-200 p-3 appearance-none outline-none focus:border-black bg-white">
                    <option>Country</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-6">Shipping Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" defaultChecked className="accent-black w-4 h-4" />
                    <span className="text-sm font-medium">Standard Shipping (5-7 business days)</span>
                  </div>
                  <span className="font-bold text-sm">$5.99</span>
                </label>
                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="accent-black w-4 h-4" />
                    <span className="text-sm font-medium">Express Shipping (2-3 business days)</span>
                  </div>
                  <span className="font-bold text-sm">$12.99</span>
                </label>
                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="accent-black w-4 h-4" />
                    <span className="text-sm font-medium">Overnight Shipping (1 business day)</span>
                  </div>
                  <span className="font-bold text-sm">$24.99</span>
                </label>
              </div>
            </section>

            <div className="mt-10 flex justify-end">
              <button className="bg-black text-white px-10 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                Payment 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-[35%] bg-white p-6 shadow-sm rounded-sm">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {items.map(({ product, quantity }) => (
                <div key={product._id} className="flex gap-4">
                  <div className="w-16 h-20 bg-gray-50 rounded-sm overflow-hidden flex-shrink-0">
                    <img src={product.images[0]} className="w-full h-full object-cover" alt={product.name} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-bold">{product.name}</h3>
                      <span className="text-xs font-bold">${product.price}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">Quantity: {quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 pb-4 border-b border-gray-100">
                <span>Shipping</span>
                <span className="font-bold text-black">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;