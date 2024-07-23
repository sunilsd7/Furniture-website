
import React from 'react'
import sofa from '../assets/sofa.png'
import hanginglamp from '../assets/hanginglamp.png'
import decoration from '../assets/decoration.png'


const Collection = () => {
  return (
   <>
   <div className="text-center center">
    <br />
    <p ><span className="font-bold text-2xl">Inspiration Colection</span>.<br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
  </div>

  <div className="flex py-8 px-10 mt-8 container  screen " >
    <img src={decoration} alt=""  className="px-3 py-7 "/>
    <img src={sofa} alt=""  className='px-3 '/>
    <img src={hanginglamp} alt="" className=' px-3 py-7 '/>
  </div>

   </>
  )
}

export default Collection
