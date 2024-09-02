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
        <div className="grid w-full grid-cols-2">
          <div className="bg-[#131313] w-full rounded-lg p-5">
            <div className="flex flex-col w-full ">
              <div className="w-full bg-white h-28"></div>
              <div className="flex items-center">
                <span className="text-xl font-semibold">Safar Link</span>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="md"
                  className="bg-lavender"
                >
                  Lihat Detail
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
