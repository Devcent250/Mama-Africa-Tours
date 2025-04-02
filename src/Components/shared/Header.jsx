import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white py-2 z-50 font-coolvetica font-normal">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-6 text-sm">
          <span className="flex items-center">
            <FaPhone className="mr-2" /> +250 788 784 023 906
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" /> mamafricatour1@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
