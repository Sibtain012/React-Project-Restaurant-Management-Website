import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-[#349705]">
                RESTAURANT
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-800 hover:text-[#349705] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/menu"
                  className="text-gray-800 hover:text-[#349705] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu
                </a>
                <a
                  href="/about"
                  className="text-gray-800 hover:text-[#349705] px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="/gallery"
                  className="text-gray-800 hover:text-[#349705] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  className="text-gray-800 hover:text-[#349705] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-[#349705] hover:text-gray-800" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-[#349705] hover:text-gray-800" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-[#349705] hover:text-gray-800" />
              </a>
            </div>

            <div className="flex md:hidden ml-3">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 hover:text-[#349705] focus:outline-none"
              >
                {menuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-800 hover:text-[#349705] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-gray-800 hover:text-[#349705] block px-3 py-2 rounded-md text-base font-medium"
          >
            Menu
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-[#349705] block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <a
            href="/gallery"
            className="text-gray-800 hover:text-[#349705] block px-3 py-2 rounded-md text-base font-medium"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-[#349705] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="text-[#349705] hover:text-gray-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-[#349705] hover:text-gray-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-[#349705] hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
