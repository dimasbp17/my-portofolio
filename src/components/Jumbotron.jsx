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
import dummyJumbotron from '../data/jumbotron';
import { Link } from 'react-router-dom';

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
          <div className="font-bold md:text-5xl">
            <span>Saya </span>
            <span className="text-lavender">{name}</span>
          </div>
          <div className="text-lg text-white/70">{role}</div>
          <hr className="mt-5 border border-gray-300" />
          <div className="my-5 text-justify">{description}</div>

          <Button
            size="lg"
            className="flex items-center justify-center capitalize bg-lavender"
          >
            <FaFileLines />
            Download CV
          </Button>
        </div>
        <div className="space-y-10 col-span-full md:col-span-6">
          <div className="relative flex items-center justify-center ">
            <img
              src={image}
              alt=""
              className="w-[200px] rounded-lg z-10 hover:scale-105 duration-300"
            />
            <div className="absolute bg-lavender w-[200px] h-[300px] rounded-lg top-4 ml-8"></div>
          </div>

          <div className="flex items-center justify-center">
            <span>Temukan saya</span>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mx-2 text-white border border-white rounded-full bg-lavender/60 size-10"
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
