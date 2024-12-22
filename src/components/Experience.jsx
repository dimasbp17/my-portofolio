import { Card } from '@material-tailwind/react';
import React from 'react';
import pengalamanKerja from '../data/pengalamanKerja';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';

const Experience = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white md:px-20">
        <div className="flex flex-col items-start w-full mt-16 mb-5 text-4xl font-bold md:flex-row md:items-center text-nowrap">
          Pengalaman <span className="pl-2 text-hijau">Kerja</span>
          <hr className="w-full border border-white md:ml-5" />
        </div>
        <div className="w-full gap-5 max-w-[700px] space-y-10 mt-5">
          {pengalamanKerja.map((penga, index) => (
            <div className="flex items-center">
              <div className="p-2 bg-green-800 rounded-full">
                <PiSuitcaseSimpleFill size={20} />
              </div>
              <hr className="w-10 border border-white" />
              <Card
                key={index}
                className="w-full p-3 text-white bg-transparent border border-white"
              >
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-lg font-semibold text-hijau">
                    {penga.company}
                  </h1>
                  <img
                    src={penga.image}
                    alt={penga.company}
                    className="w-[100px]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="font-medium">{penga.position}</h1>
                  <h1 className="text-xs italic">{penga.time}</h1>
                </div>
                <ul className="pl-5 mt-2 list-disc">
                  {penga.task.map((taskItem, taskIndex) => (
                    <li key={taskIndex}>{taskItem}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
