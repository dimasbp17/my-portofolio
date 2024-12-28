import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 p-5 text-white bg-[#0F0F0F] md:grid-cols-2 md:px-20">
        <div className="flex items-center">
          2024 <span className="ml-2 text-hijau">Dimas Bagus Prasetyo.</span>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-bold">Hubungi Saya :</div>
          <div className="flex items-center space-x-2">
            <Link
              to={'https://wa.me/6282327614154'}
              target="blank"
            >
              <IoLogoWhatsapp className="size-10" />
            </Link>
            <div className="flex flex-col">
              <span className="text-white/70">Whatsapp</span>
              <span className="text-hijau">0823-2761-4154</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <MdOutlineEmail className="size-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-white/70">Email</span>
              <span className="text-hijau">dimasbp1726@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
