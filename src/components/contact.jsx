import React from 'react'
import Button from './button'

const contact = () => {
  return (
    <div className='text-center bg-silver py-20'>
        <div className="heading r">
            <h2 className='font-bold'>Join Our Mailing List</h2>
            <p className=''>Sign up to receive inspiration, product updates, <br /> and special offers from our team.</p>
        </div>
        <div className="form ">
            <input type="email"  placeholder='example@email.com ' className='border-black py-2'/>
            <Button style="text-white bg-blue px-8 py-2 font-bold" text={"Submit"}/>
        </div>
        
      
    </div>
  )
}

export default contact
