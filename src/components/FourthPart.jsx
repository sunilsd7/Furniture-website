import React, { useState } from 'react';
import { work } from '../Data/work.js';

const FourthPart = () => {
  const [workItems, setWorkItems] = useState(work);

  return (
    <>
      {/* Heading Section */}
      <div className="text-center py-8">
        <h1 className="font-bold text-2xl md:text-3xl">How it Works</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-8">
        {workItems.map((value) => (
          <div className="w-full md:w-1/3 lg:w-1/4 text-center" key={value.id}>
            <div className="imgthird mt-5 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={value.image}
                alt={value.head}
                className="  mx-auto mb-4"
              />
              <h2 className="font-bold text-xl mb-2">{value.head}</h2>
              <p className="text-gray-600">{value.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FourthPart;