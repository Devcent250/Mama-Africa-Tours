import React from 'react';

const About = () => {
  return (
    <div className='mt-32 ml-36 mb-24 font-coolvetica'>
      <h1 className='text-sm text-green-600'>About Mama Africa Tours</h1>
      <h1 className='mt-6 mr-56'>
        Welcome to Mama Africa Tours, your gateway to the captivating beauty of Rwanda. 
        We are a premier travel and tour company dedicated to providing unforgettable 
        experiences that showcase the unique charm and splendor of this remarkable East African nation.
      </h1>

      <h1 className='text-xl mt-6'>What Makes Us Unique:</h1>
      <h1 className='mt-6'>
        <p className='mt-[-24px] ml-6'>In-Depth Local Insight:</p> 
        <p className='mr-72'>Our team is made up of dedicated locals with a deep understanding of Rwanda's rich culture and hidden treasures. We're passionate about showcasing the best this beautiful country has to offer.</p>
      </h1>

      <h1 className='mt-6'>
        <p className='mt-[-24px] ml-6'>Bespoke Journeys:</p> 
        <p className='mr-72'>We design tailored travel experiences to match each client’s unique preferences and passions, ensuring every adventure is truly personalized and memorable.</p>
      </h1>

      <h1 className='mt-6'>
        <p className='mt-[-24px] ml-6'>Eco-Conscious Tourism:</p>
        <p className='mr-72'>We are committed to sustainable tourism. Our tours focus on protecting the environment, uplifting local communities, and encouraging ethical wildlife interactions.</p>
      </h1>

      <h1 className='text-xl mt-6'>Why Choose Mama Africa Tours:</h1>

      <ul className='mt-6 list-disc ml-6'>
        <li>
          <p>Passion for Excellence:</p>
          <p>We are driven by a passion for excellence in service, ensuring that every aspect of your journey exceeds expectations.</p>
        </li>
        <li>
          <p>Safety and Comfort:</p>
          <p className='mr-72'>Your safety and comfort are our top priorities. Our well-maintained vehicles, experienced guides, and carefully selected accommodations guarantee a worry-free travel experience.</p>
        </li>
        <li>
          <p>Customer-Centric Approach:</p>
          <p className='mr-72'>We believe in building lasting relationships with our clients. Our customer-centric approach means that we are always ready to go the extra mile to make your journey unforgettable.</p>
        </li>
      </ul>

      <h2 className='mt-6 mr-72'>
        Set off on an exploration of Rwanda with Mama Africa Tours, where each moment unfolds a new adventure, and every location shares a unique story. Discover the enchantment of Rwanda alongside us!
      </h2>

      {/* Short horizontal line */}
      <hr className='mt-8 border-t border-black mr-[80%]' />
    </div>
  );
}

export default About;
