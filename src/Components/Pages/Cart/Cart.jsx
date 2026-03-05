import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../../Provider/useCart";
import Navbar from "../../Shared/Navbar/Navbar";
import { Trash2, Minus, Plus } from "lucide-react";
import Footer from "../../Shared/Footer/Footer";

const Cart = () => {
  const { items, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white font-raleway">
        <Navbar />
        <div className="container mx-auto py-32 text-center">
          <h2 className="text-4xl font-serif mb-6">Your cart is empty</h2>
          <button
            onClick={() => navigate("/all-products")}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-raleway">
      <Navbar />
      <div className="container mx-auto min-h-screen px-6 py-12">
        <h2 className="text-4xl font-serif mb-10">Shopping Cart</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 space-y-8">
            {items.map(({ product, quantity }) => (
              <div
                key={product._id}
                className="flex gap-6 border-b pb-8 border-gray-100"
              >
                <div className="w-24 h-32 bg-brand-gray">
                  <img
                    src={product.images[0]}
                    className="w-full h-full object-cover"
                    alt={product.name}
                  />
                </div>
                <div className="flex-1 flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">
                      {product.category}
                    </p>

                    <div className="flex items-center gap-2 mt-8">
                      <button
                        onClick={() => updateQuantity(product._id, -1)}
                        className="p-3 border border-gray-100"
                      >
                        <Minus size={12} />
                      </button>

                      <span className="px-4 py-2 text-xs font-bold border border-gray-100">
                        {quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(product._id, 1)}
                        className="p-3 border border-gray-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">${product.price}</p>
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="mt-4 text-red-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => navigate("/all-products")}
              className="text-sm font-bold border-b-2 border-brand-black pb-1 mt-6"
            >
              Continue Shopping
            </button>
          </div>

          {/* Order Summary Box */}
          <div className="w-full lg:w-1/3">
            <div className="order-summary-box">
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 text-sm border-b border-brand-black/10 pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold">$5.99</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold mb-8">
                <span>Total</span>
                <span>${(subtotal + 5.99).toFixed(2)}</span>
              </div>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="input-field text-xs flex-1"
                />
                <button className="bg-white border border-brand-black px-4 text-xs font-bold uppercase tracking-widest">
                  Apply
                </button>
              </div>

              <NavLink to="/checkout">
                <button
                  
                  className="btn-primary w-full flex justify-between items-center"
                >
                  <span>Proceed to Checkout</span>
                  <span>→</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
