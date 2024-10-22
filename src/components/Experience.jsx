import { Card } from '@material-tailwind/react';
import React from 'react';
import pengalamanKerja from '../data/pengalamanKerja';

const Experience = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white md:px-20">
        <div className="flex flex-col items-start w-full mt-5 mb-5 text-4xl font-bold md:flex-row md:items-center text-nowrap">
          Pengalaman <span className="pl-2 text-hijau">Kerja</span>
          <hr className="w-full border border-white md:ml-5" />
        </div>
        <div className="grid w-full grid-cols-2 gap-5 mt-5">
          {pengalamanKerja.map((penga, index) => (
            <Card className="w-full p-3 text-white bg-transparent border border-white">
              <h1 className="font-semibold">{penga.position}</h1>
              <h1>{penga.company}</h1>
              <h1 className="italic">{penga.time}</h1>
              <ul className="pl-5 mt-2 list-disc">
                {penga.task.map((taskItem, taskIndex) => (
                  <li key={taskIndex}>{taskItem}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
