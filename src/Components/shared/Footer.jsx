import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8  bottom-0 inset-x-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">


        <div className="flex flex-col items-center md:items-start">

          <img src="/img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />

          <img src="img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />

          <div className="flex space-x-4">

            <a href="#" aria-label="Facebook" className="text-white">
              <FacebookIcon />
            </a>

            <a href="https://www.instagram.com/mama_africa_tours/"
              aria-label="Instagram"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>

            <a href="#" aria-label="YouTube" className="text-white">
              <YouTubeIcon />
            </a>
          </div>
        </div>


        <div className="flex flex-col items-center md:items-start font-coolvetica">
          <h3 className=" mb-2">Address</h3>
          <p>Kigali, Nyarugenge</p>
          <p>KN 254 St.</p>
          <p>info@mamaafrica.com</p>
        </div>


        <div className="flex flex-col items-center md:items-start font-coolvetica">
          <h3 className="font-normal mb-2">Register for our news updates</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black bg-green-00"
            />
            <button className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
      </div>


      <div className="mt-8 border-t border-white pt-4 text-center font-coolvetica">

        <p className="text-sm font-normal ">Copyrights © 2025 - <span className='text-yellow-300'>Mama Africa Tours,</span> All Rights Reseved.</p>

        <p className="text-sm font-normal">Copyrights © 2025 - <span className='text-white'>Mama Africa Tours,</span> All Rights Reseved.</p>

      </div>
    </footer>
  );
};

export default Footer;
