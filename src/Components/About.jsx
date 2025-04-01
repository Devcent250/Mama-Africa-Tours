import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const faqs = [
  { question: "What is included in the tour package?", answer: "Accommodation, meals, and guided tours are included." },
  { question: "Do I need a visa to visit Rwanda?", answer: "Yes, most travelers require a visa. We can assist in the application process." },
];

const About = () => {
  const navigate = useNavigate(); 

  const handleBookingClick = () => {
    navigate("/booking"); 
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen w-full bg-slate-200 flex justify-center items-center px-6 py-12 mt-32">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-justify leading-relaxed font-coolvetica"
      >
        <h1 className="text-xl text-green-600">About Mama Africa Tours</h1>
        <p className="mt-6">
          Welcome to Mama Africa Tours, your gateway to the captivating beauty of Rwanda. 
          We provide unforgettable experiences that showcase the unique charm and splendor of this remarkable East African nation.
        </p>

        <img 
          src="/img/rda01.jpg" 
          alt="Beautiful landscape of Rwanda" 
          className="w-full h-96 object-cover rounded-sm mt-6 shadow-md"
        />

        <h1 className="text-xl mt-6">What Makes Us Unique:</h1>
        
        <div className="mt-4">
          <h2 className="font-semibold">In-Depth Local Insight:</h2>
          <p>Our team consists of dedicated locals passionate about Rwanda's culture and hidden treasures.</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Bespoke Journeys:</h2>
          <p>We create tailored travel experiences, ensuring every adventure is personalized and memorable.</p>
        </div>
=======
    <div className=' ml-24 mb-24 font-coolvetica mr-12 mt-36 text-justify leading-relaxed justify-center items-center'>
      <h1 className='text-xl text-green-600'>About Mama Africa Tours</h1>
      <h1 className='mt-6 text-justify leading-relaxed mr-12'>
        Welcome to Mama Africa Tours, your gateway to the captivating beauty of Rwanda. 
        We are a premier travel and tour company dedicated to providing unforgettable 
        experiences that showcase the unique charm and splendor of this remarkable East African nation.
      </h1>

      <h1 className='text-xl mt-6'>What Makes Us Unique:</h1>
      <h1 className='mt-6 '>
        <p className='mt-[-24px] ml-6'>In-Depth Local Insight:</p> 
        <p className=''>Our team is made up of dedicated locals with a deep understanding of Rwanda's rich culture and hidden treasures. We're passionate about showcasing the best this beautiful country has to offer.</p>
      </h1>

      <h1 className='mt-6 '>
        <p className='mt-[-24px] ml-6'>Bespoke Journeys:</p> 
        <p className='mr-12 mt-6 text-justify leading-relaxed'>We design tailored travel experiences to match each client’s unique preferences and passions, ensuring every adventure is truly personalized and memorable.</p>
      </h1>

      <h1 className='mt-6'>
        <p className='mt-[-24px] ml-6'>Eco-Conscious Tourism:</p>
        <p className=''>We are committed to sustainable tourism. Our tours focus on protecting the environment, uplifting local communities, and encouraging ethical wildlife interactions.</p>
      </h1>
>>>>>>> 944bb1eda6ef84f62e27444a2edd129a2645b8c7

        <div className="mt-4">
          <h2 className="font-semibold">Eco-Conscious Tourism:</h2>
          <p>Our tours prioritize sustainability, supporting local communities and protecting the environment.</p>
        </div>

<<<<<<< HEAD
        <h1 className="text-xl mt-6">Why Choose Mama Africa Tours:</h1>
        <ul className="mt-6 list-disc pl-6">
          <li>
            <h2 className="font-semibold">Passion for Excellence:</h2>
            <p>We strive to exceed expectations in every aspect of your journey.</p>
          </li>
          <li>
            <h2 className="font-semibold">Safety and Comfort:</h2>
            <p>Our well-maintained vehicles and expert guides ensure a worry-free experience.</p>
          </li>
          <li>
            <h2 className="font-semibold">Customer-Centric Approach:</h2>
            <p>We go the extra mile to create unforgettable moments for our clients.</p>
          </li>
        </ul>

        <div className="mt-10">
          <h2 className="text-xl text-green-600">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <motion.button
          onClick={handleBookingClick}
          className="mt-4 lg:mt-8 text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          BOOK NOW
        </motion.button>

        <hr className="mt-8 border-t border-black w-1/4" />
      </motion.div>
=======
      <ul className='mt-6 list-disc ml-6'>
        <li>
          <p>Passion for Excellence:</p>
          <p>We are driven by a passion for excellence in service, ensuring that every aspect of your journey exceeds expectations.</p>
        </li>
        <li>
          <p>Safety and Comfort:</p>
          <p className=''>Your safety and comfort are our top priorities. Our well-maintained vehicles, experienced guides, and carefully selected accommodations guarantee a worry-free travel experience.</p>
        </li>
        <li>
          <p>Customer-Centric Approach:</p>
          <p className=''>We believe in building lasting relationships with our clients. Our customer-centric approach means that we are always ready to go the extra mile to make your journey unforgettable.</p>
        </li>
      </ul>

      <h2 className='mt-6'>
        Set off on an exploration of Rwanda with Mama Africa Tours, where each moment unfolds a new adventure, and every location shares a unique story. Discover the enchantment of Rwanda alongside us!
      </h2>

      <hr className='mt-8 border-t border-black mr-[80%]' />
>>>>>>> 944bb1eda6ef84f62e27444a2edd129a2645b8c7
    </div>
  );
};

export default About;
