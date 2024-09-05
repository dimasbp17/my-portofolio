import { Button } from '@material-tailwind/react';
import React from 'react';
import {
  FaFacebookF,
  FaFileLines,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';

const Jumbotron = ({ name, role, description, image, socialLinks }) => {
  const iconMap = {
    FaGithub: <FaGithub />,
    FaInstagram: <FaInstagram />,
    FaLinkedinIn: <FaLinkedinIn />,
    FaFacebookF: <FaFacebookF />,
  };

  return (
    <>
      <div className="grid items-center justify-center w-full h-screen grid-cols-12 p-4 pt-16 text-white md:gap-10 md:px-20">
        <div className="flex flex-col gap-2 col-span-full md:col-span-6">
          <span className="font-bold md:text-2xl">Halo semua</span>
          <div className="text-lg font-bold md:text-5xl">
            <span>Saya </span>
            <span className="text-hijau">{name}</span>
          </div>
          <div className="text-lg text-white/70 h-7">
            <Typewriter
              texts={role}
              speed={150}
              loop={true}
            />
          </div>
          <hr className="mt-5 border border-gray-300" />
          <div className="my-5 text-justify">{description}</div>

          <Button
            size="lg"
            className="flex items-center justify-center capitalize bg-hijau"
          >
            <FaFileLines />
            Download CV
          </Button>
        </div>
        <div className="hidden space-y-10 col-span-full md:col-span-6 md:block">
          <div className="relative flex items-center justify-center ">
            <img
              src={image}
              alt="Dimas Bagus Prasetyo"
              className="w-[300px] h-[300px] object-cover object-top z-10 hover:scale-105 duration-300 rounded-full"
            />
            {/* <div className="absolute bg-lavender w-[300px] h-[300px] rounded-full top-4 ml-8"></div> */}
          </div>

          <div className="flex items-center justify-center">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mx-2 text-white duration-300 border border-white rounded-full hover:scale-105 bg-hijau/60 size-10"
              >
                {iconMap[link.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
