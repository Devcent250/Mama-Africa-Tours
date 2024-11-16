import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Function to check if the screen is large enough
const isLargeScreen = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth >= 1024; // Large screen (>= 1024px)
  }
  return true;
};

const HeroSection = () => {
  const images = [
    "/img/10.jpg",
    "/img/07.jpg",
    "/img/26.jpg",
    "/img/04.jpg",
    "/img/05.jpg",
    "/img/06.jpg",
    "/img/08.jpg",
    "/img/09.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(isLargeScreen());
  const navigate = useNavigate(); // Initialize the navigate function

  // Auto slide logic
  useEffect(() => {
    if (isAutoSliding) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 2000);

      return () => clearInterval(slideInterval);
    }
  }, [images.length, isAutoSliding]);

  // Handle screen resize to toggle auto sliding
  useEffect(() => {
    const handleResize = () => {
      setIsAutoSliding(isLargeScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle button click to navigate to the Booking component
  const handleBookingClick = () => {
    // Define the selected tour based on the current slide
    const selectedTour = getTourNameBySlide(currentSlide);
    navigate('/booking', { state: { selectedTour } }); // Pass the selected tour in state
  };

  // Function to get the tour name based on the current slide
  const getTourNameBySlide = (slideIndex) => {
    const tourNames = [
      "Akagera National Park Safaris",
      "Mountain Gorilla Expeditions",
      "Nyungwe Forest Adventures",
      "Guided Birding Tours",
      "Historical Sites Tour",
      "Gastronomic Experience",
      "Cultural City Tour",
      "Wildlife Safari",
    ];
    return tourNames[slideIndex % tourNames.length]; // Adjust based on your tour names
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center md:mt-36"
      style={{ backgroundImage: `url(${images[currentSlide]})` }} // Set dynamic background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold font-Coolvetica">
          Explore the wild with us
        </h1>
        <p className="mt-2 lg:mt-4 text-lg lg:text-xl font-Coolvetica">
          Safety to the wild only comes when you travel with those who
          understand the wild.
        </p>
        <button
          onClick={handleBookingClick}
          className="mt-4 lg:mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 lg:px-6 rounded-full transition duration-300 transform hover:scale-110 hover:shadow-lg"
        >
          BOOK NOW
        </button>
      </div>

      {/* "Our Services" Section with Background on the Word */}
      <div id="services" className="absolute bottom-[-16px] w-full py-4 text-center">
        <h2 className="text-5xl lg:text-3xl font-bold text -black">
          <span className="bg-white text-green-500 py-1 px-12 inline-block rounded-t-lg shadow-md font-coolvetica">
            Our Services
          </span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;