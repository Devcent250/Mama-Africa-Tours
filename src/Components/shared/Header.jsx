import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
<<<<<<< HEAD
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white py-2 z-50 font-coolvetica font-normal">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
=======
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white py-2 z-50 font-coolvetica font-normal"> {/* Make it fixed with higher z-index */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
>>>>>>> 944bb1eda6ef84f62e27444a2edd129a2645b8c7
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
