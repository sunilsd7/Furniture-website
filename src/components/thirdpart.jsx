import React, { useState } from 'react';
import { data } from '../Data/data';

const Thirdpart = () => {
  const [dataItems, setDataItems] = useState(data);

  return (
    <>
      {/* Heading Section */}
      <div className="browse text-center py-6">
        <h1 className="font-bold text-2xl md:text-3xl">Browse The Range</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-8">
        {dataItems.map((value) => (
          <div className="w-full md:w-1/3 lg:w-1/4 text-center" key={value.id}>
            <div className="imgthird mt-5">
              <img
                src={value.image}
                alt={value.head}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h2 className="font-bold text-xl mt-4">{value.head}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Thirdpart;