import React from 'react';
import banner from '../assets/hero.png';
import Button from './Button';

const Hero = () => {
  return (
    <section
      className="hero relative h-screen"
      style={{
        background: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-end px-4 md:px-7">
        <div className="hero-box bg-light bg-opacity-90 py-8 px-6 md:px-8 w-full md:w-[40%] mr-0 md:mr-6 rounded-lg shadow-lg">
          <span className="tracking-widest text-sm md:text-base text-gray-600">
            New Arrival
          </span>
          <h1 className="text-blue text-3xl md:text-5xl font-bold mt-2 mb-4 tracking-widest">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 w-full md:w-[80%] tracking-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="buttonhero">
            <Button
              style="text-white bg-blue px-6 py-3 md:px-9 md:py-4 font-bold rounded-2xl hover:bg-dark-blue transition-colors duration-300"
              text="BUY NOW"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;