import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white py-2 z-50 font-coolvetica font-normal ">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-col items-center text-center w-full space-y-2 md:flex-row md:items-start md:text-left md:space-y-0 md:space-x-4">
  <span className="flex items-center text-sm">
    <FaPhone className="mr-2" /> +250 788 784 023 906
  </span>
  <span className="flex items-center text-sm">
    <FaEnvelope className="mr-2" /> mamafricatour1@gmail.com
  </span>
</div>



      </div>
    </div>
  );
};

export default Header;
