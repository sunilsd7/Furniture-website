
import {work} from '../Data/work.js'
import React, { useState } from 'react'



const FourthPart = () => {
    const [workItems,setworkItems]=useState(work)
  return (
    <>
    <div className="text-center py-8">
        <h1 className='font-bold'>How it Works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className=" flex">
        {
        workItems.map((value,i)=>{
              return <div className='relative ' key={value.id}>
                <div className="imgthird mt-5  text-center py-10 pl-10 pr-10  ">
                    <img src={value.image} alt="" />
                    <h2 className='font-bold'>{value.head}</h2>
                    <p>{value.body}</p>

                </div>
              </div>

        })
    }
    </div>

    </>
  )
}

export default FourthPart
