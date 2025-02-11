import React from 'react';
import sofa from '../assets/sofa.png';
import hanginglamp from '../assets/hanginglamp.png';
import decoration from '../assets/decoration.png';

const Collection = () => {
  return (
    <>
     
      <section className="text-center mt-8 px-4">
        <p className="font-bold text-2xl mb-4">Inspiration Collection</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>


      <div className="flex flex-col md:flex-row justify-center items-center py-8 px-4 md:px-10 mt-8 space-y-6 md:space-y-0 md:space-x-6">
       
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={decoration}
            alt="Decoration item"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

     
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={sofa}
            alt="Sofa"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={hanginglamp}
            alt="Hanging lamp"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Collection;