import React, { useState,useRef,useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between ">
         
          <div className="text-blue-600 font-bold text-2xl">Furniture</div>

          <div className=" md:hidden ">
            <button
              onClick={toggleMenu}
             
            >
              {menuOpen ? <FiX/>  : <FiMenu />}
            </button>
          </div>

          <div
            className="hidden md:flex md:items-center w-full md:w-auto "
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li>
                <a
                  href="#home"
                  className=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className=""
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className=""
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className=""
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className=""
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 right-6  text-black rounded-lg shadow-lg p-4 z-50"
          >
            <ul className="flex flex-col gap-y-4 text-lg">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Product
                </a>
              </li>
              <li className="">
                <a
                  className=" hover:text-blue"
                  href='#gallery'
                
                  onClick={toggleMenu}
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;