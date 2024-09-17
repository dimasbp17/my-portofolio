import { Button } from '@material-tailwind/react';
import React from 'react';
import project from '../data/project';
import { Link } from 'react-router-dom';

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
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {project.map((data) => (
            <div
              key={data.id}
              className="w-full p-5 bg-black border border-white rounded-xl"
            >
              <div className="flex flex-col w-full ">
                <div className="w-full ">
                  <img
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="mt-2 text-xl font-semibold text-hijau">
                    {data.title}
                  </span>
                  <span className="text-base text-justify text-white/90">
                    {data.description}
                  </span>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <Link
                    to={data.href}
                    target="blank"
                  >
                    <Button
                      size="md"
                      className="capitalize bg-hijau"
                    >
                      Buka Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
