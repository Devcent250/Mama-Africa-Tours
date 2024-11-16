import React from 'react';

// Updated image imports using require
import img1 from '/img/07.jpg';
import img2 from '/img/04.jpg';
import img3 from '/img/06.jpg';
import img4 from '/img/08.jpg';
import img5 from '/img/09.jpg';
import img6 from '/img/17.jpg';

const Package = [
  {
    img: img1,
    title: 'Gorilla Trekking Tours',
    description: 'Experience the majestic mountain gorillas in their natural habitat with our expert guides.',
  },
  {
    img: img2,
    title: 'Cultural Tours',
    description: 'Discover Rwanda’s rich history and vibrant traditions through our guided cultural tours.',
  },
  {
    img: img3,
    title: 'Nature and Wildlife Safaris',
    description: 'Explore the diverse wildlife of Rwanda’s national parks with thrilling safari adventures.',
  },
  {
    img: img4,
    title: 'Bird Watching Tours',
    description: 'Enjoy birdwatching in Rwanda’s lush forests and spot rare bird species in their habitats.',
  },
  {
    img: img5,
    title: 'Adventure Activities',
    description: 'From hiking to zip-lining, embark on exciting adventure tours across Rwanda’s landscapes.',
  },
  {
    img: img6,
    title: 'Community and Eco-Tours',
    description: 'Support local communities while exploring eco-friendly tours that promote sustainable tourism.',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-Coolvetica">
      {/* Background Image with Title */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{
          backgroundImage: `url('/img/23.jpg')`, // Adjust path if necessary
        }}
      >
        <h1 className="text-5xl text-white bg-opacity-50 p-4 rounded-lg">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <section id="services" className="">
        <div className="container mx-auto px-4 md:px-8 mt-11">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Package.map((service, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md w-full h-full overflow-hidden rounded-lg transition-transform transform hover:scale-105 duration-300 group"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative w-full h-72"> {/* Fixed image height */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>

                {/* Overlay content with title and description */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-500">
                  <h3 className="text-lg">{service.title}</h3>

                  {/* Hidden description on hover */}
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
