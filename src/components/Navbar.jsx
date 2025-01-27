import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <div className="text-blue-600 font-bold text-2xl">Furniture</div>

          {/* Hamburger Menu for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block py-2 md:py-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block py-2 md:py-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block py-2 md:py-0"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block py-2 md:py-0"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block py-2 md:py-0"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;