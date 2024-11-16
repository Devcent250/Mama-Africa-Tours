import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Packages = memo(({ packagesData, onTourSelect }) => {
  const navigate = useNavigate();

  const handleBookNow = (tourName) => {
    onTourSelect(tourName); // Optional: If you want to trigger some other logic
    navigate('/booking', { state: { selectedTour: tourName } }); // Pass the selected tour through state
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{
          backgroundImage: `url('/img/20.jpg')`, // Adjust path if necessary
        }}
      >
        <h1 className="text-5xl text-white bg-opacity-50 p-4 rounded-lg">
          Our Packages
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {packagesData.map((packageItem) => (
          <div key={packageItem.id} className="text-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col">
              <div className="relative h-60 w-full">
                <img
                  src={packageItem.imageUrl}
                  alt={packageItem.name}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl">{packageItem.name}</h3>
                  <p className="text-gray-700 mt-2">{packageItem.description}</p>
                </div>
                <button
                  onClick={() => handleBookNow(packageItem.name)} // Pass the package name to the function
                  className="mt-4 lg:mt-8 bg-green-500 hover:bg-green-700 text-white  py-2 px-4 lg:px-6 rounded transition duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Packages;
