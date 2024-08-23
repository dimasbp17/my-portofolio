import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full py-5 bg-[#0F0F0F] px-4 md:px-20 fixed">
        <div className="flex items-center justify-between">
          <div className="flex text-xl font-bold">
            <span className="text-white">Dimas</span>
            <span className="text-lavender">WEB</span>
          </div>

          <div
            className="flex items-end justify-end w-full lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <IoClose className="text-2xl text-white" />
            ) : (
              <IoMenu className="text-2xl text-white" />
            )}
          </div>

          <div className="flex items-center text-white">
            <ul
              className={`absolute lg:static top-16 left-0 w-full bg-[#0F0F0F] flex flex-col items-center space-y-5 py-5 transition-all duration-300 lg:flex lg:flex-row lg:space-y-0 lg:space-x-10 lg:py-0 lg:opacity-100 lg:visible ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-lavender"
                >
                  Home
                </a>
              </li>
              <li>About</li>
              <li>Project</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
