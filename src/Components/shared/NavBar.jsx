import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 mt-16 lg:mt-8 md:mt-8 bg-slate-100 shadow-md transition duration-500 ease-in-out">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            src="/img/logo.png"
            alt="Mama Africa Logo"
            className="h-16 w-auto object-cover transform transition duration-300 hover:scale-105"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-600 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6 transform transition duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 transform transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        <ul className="hidden md:flex justify-center items-center space-x-6 text-green-600 font-coolvetica mx-auto">
          {['', 'Who We Are', 'Services', 'Packages', 'Contact Us'].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#D6ED07] transition duration-300">
                {item === '' ? 'Home' : item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-green-600 font-coolvetica">
              {['', 'Who We Are', 'Services', 'Packages', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} onClick={closeMenu} className="hover:text-green-800 transition duration-300">
                    {item === '' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
