import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <img src="img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <a href="#" aria-label="Facebook" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.708h-3.13v-3.62h3.13V8.41c0-3.1 1.892-4.79 4.654-4.79 1.322 0 2.46.099 2.793.143v3.24l-1.916.001c-1.5 0-1.79.713-1.79 1.759v2.307h3.583l-.467 3.62h-3.116V24h6.108c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a href="#" aria-label="Instagram" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.975 1.243 2.242 1.304 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.243-3.608 1.304-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.243-2.242-1.304-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.304-3.608C4.512 2.493 5.779 2.225 7.145 2.163 8.41 2.104 8.79 2.163 12 2.163M12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.615.387 3.672 1.33c-.943.943-1.2 2.101-1.258 3.38C2.674 5.948 2.66 6.357 2.66 9.616s.014 3.668.072 4.948c.058 1.279.315 2.437 1.258 3.38.943.943 2.101 1.2 3.38 1.258 1.279.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.279-.058 2.437-.315 3.38-1.258.943-.943 1.2-2.101 1.258-3.38.058-1.279.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.315-2.437-1.258-3.38C19.615.387 18.457.13 17.178.072 15.898.014 15.489 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 0 1 0 7.676zm7.406-11.21a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a href="#" aria-label="YouTube" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a2.953 2.953 0 0 0-2.08-2.085C19.622 3.5 12 3.5 12 3.5s-7.623 0-9.418.6A2.953 2.953 0 0 0 .502 6.186C0 7.994 0 12 0 12s0 4.006.502 5.814a2.953 2.953 0 0 0 2.08 2.085c1.795.6 9.418.6 9.418.6s7.623 0 9.418-.6a2.953 2.953 0 0 0 2.08-2.085C24 16.006 24 12 24 12s0-4.006-.502-5.814zM9.769 15.6v-7.2l6.23 3.6-6.23 3.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Address and Links */}
        <div className="flex flex-col items-center md:items-start font-coolvetica">
          <h3 className=" mb-2">Address</h3>
          <p>Kigali, Nyarugenge</p>
          <p>KN 254 St.</p>
          <p>info@mamaafrica.com</p>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Register for our news updates</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white pt-4 text-center">
        <p className="text-sm">© mamafrica - Powered by Crox Media</p>
      </div>
    </footer>
  );
};

export default Footer;
