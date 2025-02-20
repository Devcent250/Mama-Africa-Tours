import React from 'react';
import ContactImage from "./img/contact-us.jpg";

function Contacts() {
  return (
    <div className="text-black mt-44 flex flex-col items-center w-full px-4 font-coolvetica">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">

        <div className=" justify-center">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full max-w-md rounded-md"
          />
        </div>

        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <h2 className="border border-black text-green-700 w-3/6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-700"></span>
            Get in touch
          </h2>
          <h3 className="text-gray-700 text-2xl md:text-3xl font-semibold leading-tight">
            Love to hear from you<br />
            <span>Get in touch!</span>
          </h3>
        </div>

        <form className="rounded-lg p-4 w-full max-w-md flex flex-col items-center md:items-start">
          <div className="w-full mb-4">
            <label htmlFor="name" className="block text-sm text-green-700 mb-2">
              Names
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-2 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-sm text-green-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="message" className="block text-sm text-green-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-2 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
