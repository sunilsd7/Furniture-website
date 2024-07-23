import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const HeroBase = () => {
  return (
   <>
   <div className="flex py-2 px-4 bg-lightblue icon item-center border-solid">
    <div className='flex mx-5 px-5 item-center'>
    <TbTruckDelivery className='overlayfirst mx-6 text-[2rem] m-3'/>
    <p className=''><span className='font-bold'>Free Delivery </span><br />Lorem ipsum dolor sit amet</p>
    </div>
    <div className="flex px-10 mx-5 m-2 ">
      <Ri24HoursFill className='overlayfirst mx-4 text-[2rem]'/>
      <p> <span className='font-bold'>Support 24/7 </span><br />Lorem ipsum dolor sit amet</p>

    </div>
    <div className="flex px-10 mx-5 m-2">
    <VscWorkspaceTrusted className='overlayFirst mx-4 text-[2rem]'/>
    <p><span className='font-bold'>100% Authentic </span><br />Lorem ipsum dolor sit amet</p>

    </div>
    
   
   </div>
   </>
  )
}

export default HeroBase
