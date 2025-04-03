import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "/img/07.jpg";
import img2 from "/img/GLR_mountain.jpg";
import img3 from "/img/SILVER_MONKEY.jpg";
import img4 from "/img/Saddle-billed_stork_couple.jpg";
import img5 from "/img/wedding.jpg";
import img6 from "/img/Old_prepararion_food.jpg";

const services = [
  {
    img: img1,
    title: "Akagera National Park Safaris",
    slug: "akagera-national-park",
    description:
      "Akagera National Park Safaris offer an unforgettable wildlife adventure in Rwanda. Explore stunning landscapes, spot lions, elephants, giraffes, and zebras, and enjoy birdwatching. A perfect getaway for nature lovers!",
  },
  {
    img: img2,
    title: "Mountain Gorilla Expeditions",
    slug: "mountain-gorilla-expeditions",
    description:
      "Mountain Gorilla Expeditions take you deep into Rwanda’s beautiful rainforests, where you can see mountain gorillas in their natural home. It’s a once-in-a-lifetime experience for nature and wildlife lovers!",
  },
  {
    img: img3,
    title: "Nyungwe Forest Adventures",
    slug: "nyungwe-forest-adventures",
    description:
      "Nyungwe Forest Adventures offer an exciting journey into one of Africa’s oldest rainforests. Explore breathtaking landscapes, walk across the famous canopy walkway, and discover rare primates, birds, and stunning waterfalls.",
  },
  {
    img: img4,
    title: "Guided Birding Tours",
    slug: "guided-birding-tours",
    description:
      "Discover a paradise for bird lovers! With over 700 bird species, including rare and colorful ones, these guided tours take you through Rwanda’s lush forests, wetlands, and savannahs. Perfect for bird watchers!",
  },
  {
    img: img5,
    title: "Historical Sites Tour",
    slug: "historical-sites-tour",
    description:
      "Step back in time and explore Rwanda’s rich history. Visit ancient kingdoms, cultural landmarks, and memorial sites that tell the story of the nation’s past. A must-do for history enthusiasts and culture lovers!",
  },
  {
    img: img6,
    title: "Gastronomic Experience",
    slug: "gastronomic-experience",
    description:
      "Treat your taste buds to Rwanda’s delicious flavors! Enjoy traditional dishes made with fresh, local ingredients, from tasty brochettes to rich stews. Take part in cooking classes and discover the unique blend of African and international cuisines.",
  },
];

const ServicesCard = () => {
  const navigate = useNavigate();

  const handleNavigation = (slug) => {
    console.log(`Navigating to /packages/${slug}`);
    navigate(`/packages/${slug}`);
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-10 font-coolvetica bg-slate-100" // Adjusted padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-xl lg:text-xl font-bold text-black text-center mb-6">
        <span className="bg-white text-green-500 py-1 px-12 lg:mb-12 rounded-t-lg shadow-md font-coolvetica">
          Our Services
        </span>
      </h2>

      <section id="services">
        <div className="container mx-auto px-6 md:px-10"> {/* Adjusted padding */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white shadow-lg w-full h-full rounded-lg overflow-hidden group"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-90 transition-opacity duration-300"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-2 service-content">
                  <h1 className="service-title">{service.title}</h1>
                  <motion.p
                    className="text-sm  opacity-0 group-hover:opacity-100 text-left transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    {service.description}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute bottom-6 flex justify-center w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 z-10"
                >
                  <motion.button
                    onClick={() => handleNavigation(service.slug)}
                    className="text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] 
                    hover:font-normal font-bold py-1 lg:py-2 px-2 rounded-md transition duration-300 transform hover:scale-110 
                    hover:shadow-lg shadow-[0_0_15px_#D6ED07]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Read More
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        className="flex justify-center items-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="border border-black rounded-md py-6 px-8 w-full text-left max-w-4xl bg-white leading-relaxed"> {/* Adjusted padding and text alignment */}
          Rwanda is a country rich in culture, wildlife, and natural beauty. Our dedicated guides are here to provide you with unforgettable experiences and insights into the heart of Rwanda. Contact us to plan your adventure today!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;