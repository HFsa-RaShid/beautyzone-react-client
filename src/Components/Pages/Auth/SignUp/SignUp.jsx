import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import Footer from "../../../Shared/Footer/Footer";
import Swal from "sweetalert2"; 
import toast from "react-hot-toast";
import useAuth from "../../../../Provider/AuthContext/useAuth";
import Navbar from "../../../Shared/Navbar/Navbar";

const SignUp = () => {
  const { setUser } = useAuth(); 
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // পাসওয়ার্ড ম্যাচ চেক
    if (password !== confirmPassword) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
        confirmButtonColor: "#1a1a1a",
      });
    }

    const newUser = { name, email, password };

    try {
      const res = await axiosPublic.post("/api/auth/register", newUser);

      if (res.data.status === "success") {
      
        setUser(res.data.user);

        toast.success('Successfully Sign Up!')

        
        navigate("/");
      }
    } catch (err) {
        console.error("Signup error response:", err.response?.data);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#1a1a1a",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f5e9da] min-h-screen font-raleway flex flex-col">
      <Navbar />

      <div className="grow flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full text-center">
          <h2 className="text-4xl font-serif mb-2 text-brand-black">Create your account</h2>
          <p className="text-sm mb-10 text-gray-600">
            Or{" "}
            <Link to="/signin" className="font-bold underline hover:text-gray-800">
              sign in to your existing account
            </Link>
          </p>

          <div className="bg-white p-10 shadow-sm rounded-sm text-left">
            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="input-label text-[10px]">Full name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="input-field"
                  placeholder="Hafsa Rashid"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="input-label text-[10px]">Email address</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="input-field"
                  placeholder="hafsa@gmail.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="input-label text-[10px]">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="input-field"
                  placeholder="........"
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="input-label text-[10px]">Confirm password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  className="input-field"
                  placeholder="........"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="pt-2">
                <label className="flex items-start gap-3 text-[10px] font-medium text-gray-500 leading-tight cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-black" />
                  <span>
                    I agree to the <span className="text-brand-black font-bold underline">Terms of Service</span> and{" "}
                    <span className="text-brand-black font-bold underline">Privacy Policy</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all mt-4 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 active:scale-95"
                }`}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="font-bold text-brand-black">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;