import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
          <p className="text-left">
            “At Mama Africa Tours, our vision is to be the premier choice for travelers seeking authentic experiences in Rwanda. 
            We aim to inspire a love for exploration while promoting sustainable tourism that benefits local communities, 
            enriching both our guests and the environments they visit.”
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
          <p className="text-left">
            “At Mama Africa Tours, our mission is to provide unforgettable travel experiences that connect guests to the culture, 
            history, and natural beauty of [Region/Country]. We prioritize personalized service, sustainability, and community 
            engagement, ensuring each journey is enriching, safe, and memorable for every traveler.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
