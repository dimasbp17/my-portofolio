import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full py-5 bg-[#0F0F0F] px-4 md:px-20 fixed z-50">
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-lavender' : 'hover:text-lavender'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'text-lavender' : 'hover:text-lavender'
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  className={({ isActive }) =>
                    isActive ? 'text-lavender' : 'hover:text-lavender'
                  }
                >
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive ? 'text-lavender' : 'hover:text-lavender'
                  }
                >
                  Project
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
