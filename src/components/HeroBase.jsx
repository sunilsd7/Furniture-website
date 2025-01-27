import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { Ri24HoursFill } from 'react-icons/ri';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const HeroBase = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-lightblue py-6 px-4 md:px-8 gap-6">
      {/* Free Delivery Section */}
      <div className="flex items-center gap-4">
        <TbTruckDelivery className="text-3xl text-blue" />
        <div>
          <p className="font-bold">Free Delivery</p>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {/* 24/7 Support Section */}
      <div className="flex items-center gap-4">
        <Ri24HoursFill className="text-3xl text-blue" />
        <div>
          <p className="font-bold">Support 24/7</p>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {/* 100% Authentic Section */}
      <div className="flex items-center gap-4">
        <VscWorkspaceTrusted className="text-3xl text-blue" />
        <div>
          <p className="font-bold">100% Authentic</p>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBase;