import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/Image.png';

const ContactUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 space-y-6 md:space-y-0">
        
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-[#f4f4f4] rounded-md transform translate-x-6 translate-y-6"></div>
          <img
            src={img}
            alt="Contact Us"
            className="relative w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-[#349705] uppercase font-semibold font-serif tracking-wide">Contact Us</p>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">We’d love to hear from you!</h2>
          <p className="text-gray-600 mb-6">
            Have any questions, feedback, or just want to say hello? Feel free to get in touch with us. We’re here to help and we look forward to hearing from you!
          </p>

          <Link to="/contact">
            <button
              className="px-6 py-3 bg-[#349705] text-white font-serif hover:bg-[#3e7923] transition duration-200"
            >
              Make a reservation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
