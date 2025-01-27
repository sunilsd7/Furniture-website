import React from 'react';
import Overlay from './Overlay';
import Buttonn from '../components/Button';

const SecondPart = () => {
  return (
    <div className="flex flex-col md:flex-row bg-silver">
      {/* Text Section */}
      <section className="w-full md:w-1/2 mt-16 md:mt-32 px-6 md:px-32 py-8 md:py-0">
        <div className="secondpart-text max-w-lg mx-auto">
          <h3 className="font-bold text-2xl md:text-3xl">Beautify Your Space</h3>
          <p className="py-5 text-gray-600">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </p>
          <div>
            <Buttonn
              style="text-white bg-blue px-9 py-4 font-bold rounded-2xl hover:bg-dark-blue transition-colors duration-300"
              text="Learn More"
            />
          </div>
        </div>
      </section>

      {/* Image Section with Overlay */}
      <section className="w-full md:w-1/2">
        <div className="secondpart-img h-full flex justify-center items-center">
          <Overlay />
        </div>
      </section>
    </div>
  );
};

export default SecondPart;