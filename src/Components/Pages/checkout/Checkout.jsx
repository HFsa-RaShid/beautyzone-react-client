import React, { useState } from "react";
import { useCart } from "../../../Provider/useCart";
import Navbar from "../../Shared/Navbar/Navbar";
import { ChevronDown, ArrowRight } from "lucide-react";
import Footer from "../../Shared/Footer/Footer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Checkout = () => {
  const { items } = useCart();
  const axiosPublic = useAxiosPublic();

  const [shippingCost, setShippingCost] = useState(5.99);

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const total = subtotal + shippingCost;

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      city: form.city.value,
      postcode: form.postcode.value,
      items: items.map(item => ({
        id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity
      })),
      totalAmount: total.toFixed(2), 
    };

    try {
      const response = await axiosPublic.post("/api/payment/init", orderData);
      if (response.data?.url) {
        window.location.replace(response.data.url);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="bg-[#f5e9da] min-h-screen font-raleway">
      <Navbar />
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <h1 className="text-4xl font-serif mb-12 text-[#1a1a1a]">Checkout</h1>

        <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Shipping Forms */}
          <div className="w-full lg:w-[65%] bg-white p-8 md:p-12 shadow-sm rounded-sm">
            <section className="mb-10">
              <h2 className="text-lg font-bold mb-8 text-[#1a1a1a]">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="space-y-1">
                  <label className="input-label text-gray-400">First name</label>
                  <input name="firstName" required type="text" className="input-field text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="input-label text-gray-400">Last name</label>
                  <input name="lastName" required type="text" className="input-field text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="input-label text-gray-400">Email</label>
                  <input name="email" required type="email" className="input-field text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="input-label text-gray-400">Phone</label>
                  <input name="phone" required type="text" className="input-field text-sm" />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <label className="input-label text-gray-400">Apartment, suite, etc.</label>
                <input name="address" required type="text" className="input-field text-sm" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                <div className="space-y-1">
                  <label className="input-label text-gray-400">City</label>
                  <input name="city" required type="text" className="input-field text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="input-label text-gray-400">State</label>
                  <div className="relative">
                    <select name="state" className="input-field appearance-none bg-white text-sm">
                      <option>Select</option>
                      <option>Dhaka</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="input-label text-gray-400">Postal Code</label>
                  <input name="postcode" required type="text" className="input-field text-sm" />
                </div>
              </div>
            </section>

            {/* Shipping Method - 3 Methods with dynamic logic */}
            <section>
              <h2 className="text-lg font-bold mb-6 text-[#1a1a1a]">Shipping Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="shipping" 
                      checked={shippingCost === 5.99} 
                      onChange={() => handleShippingChange(5.99)}
                      className="accent-black w-4 h-4" 
                    />
                    <span className="text-sm font-medium uppercase tracking-widest text-[11px]">Standard Shipping (5-7 business days)</span>
                  </div>
                  <span className="font-bold text-sm">$5.99</span>
                </label>

                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="shipping" 
                      checked={shippingCost === 12.99} 
                      onChange={() => handleShippingChange(12.99)}
                      className="accent-black w-4 h-4" 
                    />
                    <span className="text-sm font-medium uppercase tracking-widest text-[11px]">Express Shipping (2-3 business days)</span>
                  </div>
                  <span className="font-bold text-sm">$12.99</span>
                </label>

                <label className="flex items-center justify-between border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="shipping" 
                      checked={shippingCost === 24.99} 
                      onChange={() => handleShippingChange(24.99)}
                      className="accent-black w-4 h-4" 
                    />
                    <span className="text-sm font-medium uppercase tracking-widest text-[11px]">Overnight Shipping (1 business day)</span>
                  </div>
                  <span className="font-bold text-sm">$24.99</span>
                </label>
              </div>
            </section>

            <div className="mt-10 flex justify-end">
              <button type="submit" className="btn-primary flex items-center gap-3 group px-12 tracking-[0.2em] uppercase text-[11px]">
                Proceed to Payment 
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-[35%] sticky top-24">
            <div className="bg-white p-8 shadow-sm rounded-sm">
              <h2 className="text-[12px] font-bold uppercase tracking-widest mb-8 text-gray-400">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map(({ product, quantity }) => (
                  <div key={product._id} className="flex gap-4">
                    <div className="w-16 h-20 bg-[#f9f9f9] rounded-sm overflow-hidden flex-shrink-0">
                      <img src={product.images[0]} className="w-full h-full object-cover" alt={product.name} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-[11px] font-bold uppercase tracking-tight leading-tight">{product.name}</h3>
                        <span className="text-xs font-bold">${product.price}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">Qty: {quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-50 pt-6 space-y-4">
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Shipping</span>
                  <span className="text-black">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-50 text-[#1a1a1a]">
                  <span className="uppercase tracking-[0.2em] text-[10px] self-center">Total Amount</span>
                  <span className="font-serif text-2xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;