import React from 'react'
import Overlay from './Overlay'
import Button from './button'

const SecondPart = () => {
  return (
    <div className='flex  bg-silver '>
      <section>
        <div className="secondpart-text mt-32 px-32 pr-40 container border-none  box-border border-8 ">
            <h3 className='font-bold   '>Beautify Your Space</h3>
            <p className='py-5 '> Do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris.</p>
                  <div>
                    <Button style="text-white bg-blue px-9 py-4 font-bold rounded-2xl" text={"Learn More"}/>
                    
                  </div>
        </div></section>
        <section>
        <div className="secondpart-img ms-auto  h-center container">
      <Overlay/>
        </div>
        </section>
      
    </div>
  )
}

export default SecondPart
