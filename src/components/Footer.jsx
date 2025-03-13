import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#349705] text-white py-8">
                    <div className='mt-8 border-t border-[#349705] pt-3'>
                    </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-2">Opening Hours</h3>
          <p>Monday - Sunday</p>
          <p>10AM - 10PM</p>
        </div>

        {/* Book a Table */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-2">Book a Table</h3>
          <p>Uma quam massa utor enim dui</p>
          <p>Tristique aliquam feugiat fugiat</p>
          <p>Vivamus libero feugiat</p>
          <a href="tel:+1234567891" className="text-black text-xl font-bold block mt-2">
            (123) 456-7891
          </a>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-2">Our Address</h3>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>©Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
