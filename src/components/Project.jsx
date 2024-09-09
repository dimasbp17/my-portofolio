import { Button } from '@material-tailwind/react';
import React from 'react';

const Project = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#0F0F0F] p-5 text-white md:p-20">
        <div className="relative flex items-center justify-center">
          <div
            className="font-bold text-[100px] md:text-[150px] text-nowrap -translate-x-52 "
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
              color: 'transparent',
            }}
          >
            MY PROJECT
          </div>
          <div className="absolute z-10 mt-5 mb-10 font-bold text-nowrap md:text-4xl">
            Project Saya
          </div>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
          <div className="w-full p-5 bg-black border border-white rounded-xl">
            <div className="flex flex-col w-full ">
              <div className="w-full bg-white h-28"></div>
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold text-hijau">
                  Safar Link
                </span>
                <span className="text-base text-justify text-white/90">
                  Safar Link merupakan suatu aplikasi berbasis web yang
                  digunakan untuk membuat suatu laman yang dapat di share kepada
                  khalayak umum.
                </span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <Button
                  size="md"
                  className="capitalize bg-hijau"
                >
                  Buka Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
