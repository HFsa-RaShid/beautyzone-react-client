import React from 'react';
import { XCircle } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';


const PaymentCancel = () => {
    return (
        <div className="bg-beige  font-raleway flex flex-col">
            <Navbar />
            <div className="min-h-screen container mx-auto px-6 flex flex-col items-center justify-center py-20 text-center">
                {/* Cancel Icon */}
                <div className="mb-8 text-[#b06d72]">
                    <XCircle size={100} strokeWidth={1.5} />
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">
                    Oops! Your Payment Wasn't <span className="text-[#b06d72] italic">Completed!</span>
                </h1>
                <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mb-10">
                    It looks like your transaction was canceled—please double-check your details and try again.
                </p>

                {/* Action Button */}
                <NavLink to="/checkout" className="btn-primary flex items-center gap-2 group tracking-widest text-[11px] uppercase">
                    Back to Checkout
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentCancel;