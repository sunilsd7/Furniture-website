import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='navbar flex justify-around py-2  m-2 '>
         <div className="navbar-brand text-blue font-bold text-2xl">Furniture</div>
         <div className="list">
          <ul className="flex">
            <li><a href="#" className="text-dark px-7">Home</a></li>
            <li><a href="#" className="text-dark px-7">Services</a></li>
            <li><a href="#" className="text-dark px-7">Doctors</a></li>
            <li><a href="#" className="text-dark px-7">Product</a></li>
            <li><a href="#" className="text-dark px-7">Gallery</a></li>

          </ul>
         </div>
        </nav>

        </>
  )
}

export default Navbar
