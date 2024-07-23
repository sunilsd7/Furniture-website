import React from 'react'
import Button from './button'


const footer = () => {
  return (
    <div className='bg-blue px-40 text-white '>
        <div className="  py-10 flex">
          <div>
            <h1 className='font-bold'>Beauty Care </h1>
            
            
            <p> <br />Do eiusmod tempor incididunt ut labore et  <br />dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris.</p>
           <Button style="font-bold py-5 " text={"Follow Us"}/>
            </div>
            <div className="ms-auto  pr-80" >
              
                <h1 className='font-bold'>Instagram Shop</h1>
                <br />
                <div></div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
