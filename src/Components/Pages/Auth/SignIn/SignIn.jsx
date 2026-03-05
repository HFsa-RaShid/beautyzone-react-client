import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";

import toast from "react-hot-toast"; 
import useAuth from "../../../../Provider/AuthContext/useAuth";

const SignIn = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault(); 
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await loginUser(email, password);
      if (result) {
        toast.success("Successfully logged In!");
        navigate("/"); 
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed. Check credentials.");
    }
  };

  return (
    <div className="bg-[#f5e9da] min-h-screen font-raleway flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full text-center">
          <h2 className="text-4xl font-serif mb-2 text-brand-black">Sign in to your account</h2>
          <p className="text-sm mb-10 text-gray-600">
            Or <Link to="/signup" className="font-bold underline hover:text-gray-800">create a new account</Link>
          </p>
          
          <div className="bg-white p-10 shadow-sm rounded-sm text-left">
            {/* onSubmit={handleSignIn} যোগ করা হয়েছে */}
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
                  Email address
                </label>
                <input 
                  name="email" // name ট্যাগ থাকা জরুরি
                  type="email" 
                  required
                  className="w-full border border-gray-200 p-3 outline-none focus:border-brand-black transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input 
                    name="password" // name ট্যাগ থাকা জরুরি
                    type="password" 
                    required
                    className="w-full border border-gray-200 p-3 outline-none focus:border-brand-black transition-colors"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-black">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-black" /> 
                  Show password
                </label>
                <Link to="/" className="hover:underline">Forgot your password?</Link>
              </div>

              <button type="submit" className="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-all active:scale-95">
                Sign In
              </button>
            </form>
          </div>
          
          <p className="mt-8 text-[11px] text-gray-400 leading-relaxed">
            By signing in, you agree to our <span className="text-brand-black font-bold border-b border-brand-black">Terms of Service</span> and <span className="text-brand-black font-bold border-b border-brand-black">Privacy Policy</span>.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;