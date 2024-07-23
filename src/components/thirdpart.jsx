import React, { useState } from 'react'
import {data} from '../Data/data'


const Thirdpart = () => {
  const [dataItems,setdataItems]=useState(data)
  return (
    <>
   
   
        <div className="browse text-center py-6">
            <h1 className="font-bold">Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </div>
        <div className=" flex">
          {
          dataItems.map((value,i) => {
            return <div className="relative " key={value.id}>
              <div className="imgthird mt-5  text-center m-12 py-8">
              <img src={value.image} alt="Image" />
              <h2 className='font-bold'>{value.head}</h2>
           
              
               
              </div>
             <hr />
              
             
            </div>
  
            

          })
          }
        


        </div>
      
    </>
  )
}

export default Thirdpart
