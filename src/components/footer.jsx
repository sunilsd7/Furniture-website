import React from 'react';


const Footer = () => {
  return (
    <div className="bg-blue text-white px-4 md:px-40 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-4">Beauty Care</h1>
          <p className="text-gray-200">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </p>
          <div className="mt-6">
            <button
              className="font-bold py-3 px-6 bg-white text-blue rounded-lg hover:bg-gray-100 transition-colors duration-300"
              
            >Follow us</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:text-right">
          <h1 className="font-bold text-xl mb-4">Instagram Shop</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholder for Instagram images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-300 h-24 md:h-32 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-600">Image {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;