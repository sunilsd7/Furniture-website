import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroBase from './components/HeroBase'
import Collection from './components/Collection'
import SecondPart from './components/SecondPart'
import Thirdpart from './components/thirdpart'
import FourthPart from './components/FourthPart'
import Contact from './components/contact'
import Footer from './components/footer'



function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <HeroBase/>
     <Collection/>
     <SecondPart/>
     <Thirdpart/>
     <FourthPart/>
     <Contact/>
     <Footer/>
     
   
     
   
    </>
  )
}

export default App
