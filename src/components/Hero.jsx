import React from 'react'
import banner from '../assets/hero.png'
import Button from './button'

const Hero = () => {
    const backgroundIMG=
    {
        background:`url(${banner})`,
        width:'100%',
        height:"100vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }
  return (
  <>
  <section className="hero px-7" style={backgroundIMG}>
    <div className="hero-wrapper container flex justify-end mx-auto items-center h-screen ">
        <div className="hero-box bg-light py-8 px-7 w-[40%] mt-10 mr-6 bg-skyblue">
            <span className=' tracking-widest'>New Arrival</span>
            <h1 className='text-blue text-5xl font-bold w-[70%] my-1 tracking-widest'>Discover Our New Collection</h1>
            <p className='w-[80%] tracking-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="buttonhero mt-10">
                <Button style="text-white bg-blue px-9 py-4 font-bold rounded-2xl" text={"BUY NOW"} />
            </div>
           
        </div>
    </div>
</section>

  
  </>
  )
}

export default Hero
