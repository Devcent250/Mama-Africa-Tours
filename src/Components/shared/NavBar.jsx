import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 mt-10 bg-white shadow-md transition duration-500 ease-in-out">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
      
        <div className="flex items-center">
          <img
            src="img/logo.png"
            alt="Mama Africa Logo"
            className="h-16 w-auto object-cover transform transition duration-300 hover:scale-105"
          />
        </div>

        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 transform transition duration-300 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

    
        <ul className="hidden md:flex justify-center items-center space-x-6 text-green-600 font-coolvetica mx-auto">
          <li>
            <Link to="/" className="hover:text-green-800 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/who-we-are"
              className="hover:text-green-800 transition duration-300"
            >
              Who We Are
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-green-800 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className="hover:text-green-800 transition duration-300"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-green-800 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      
      {isOpen && (
        <div
          className="md:hidden bg-white shadow-lg transition-all duration-500 ease-in-out transform"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-green-600 font-coolvetica">
            <li>
              <Link to="/" className="hover:text-green-800 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/who-we-are"
                className="hover:text-green-800 transition duration-300"
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-green-800 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className="hover:text-green-800 transition duration-300"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-green-800 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
