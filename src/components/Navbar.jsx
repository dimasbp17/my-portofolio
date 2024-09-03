import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scroolToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skill', 'project'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition <= offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full py-5 bg-[#0F0F0F] px-4 md:px-20 fixed z-50">
        <div className="flex items-center justify-between">
          <div className="flex text-xl font-bold">
            <span className="text-white">Dimas</span>
            <span className="text-hijau">WEB</span>
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
                <button
                  onClick={() => scroolToSection('home')}
                  className={activeSection === 'home' ? 'text-hijau' : ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scroolToSection('about')}
                  className={activeSection === 'about' ? 'text-hijau' : ''}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scroolToSection('skill')}
                  className={activeSection === 'skill' ? 'text-hijau' : ''}
                >
                  Skill
                </button>
              </li>
              <li>
                <button
                  onClick={() => scroolToSection('project')}
                  className={activeSection === 'project' ? 'text-hijau' : ''}
                >
                  Project
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
