import React from 'react'
import Elipse from "../assets/Ellipse.png"
import lady from "../assets/lady.png"

const Overlay = () => {
  return (
  
    <div className="relative ">
      <img src={Elipse} alt="Background" className="absolute -right-1/4 top-1/4  bg-green-500  h-34 mb-7 pr-64 w-full"  />
      <img src={lady} alt="Overlay" className="relative  h-5/6 object-cover2 pr-60 w-[100%]  " />
    </div>

  )
}

export default Overlay
