import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link, NavLink, useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useCart } from '../../../Provider/useCart';


const PaymentSuccess = () => {
    const { tranId } = useParams();
    const { clearCart } = useCart();

    useEffect(() => {
       
        clearCart();
    }, []); 

    return (
        <div className="bg-beige font-raleway flex flex-col">
            <Navbar />
            <div className=" container mx-auto min-h-screen  px-6 flex flex-col items-center justify-center py-20 text-center">
                {/* Success Icon */}
                <div className="mb-8 text-green-600">
                    <CheckCircle size={100} strokeWidth={1.5} />
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">
                    Your payment has been <span className="text-green-600 italic">received!</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mb-2 uppercase tracking-widest font-bold">
                    Transaction ID: {tranId}
                </p>
                <p className="text-gray-400 text-xs md:text-sm mb-10">
                    Please check your email for a payment confirmation & invoice.
                </p>

                {/* Action Button */}
                <NavLink to="/all-products" className="btn-primary flex items-center gap-2 group tracking-widest text-[11px] uppercase">
                    Continue Shopping
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentSuccess;