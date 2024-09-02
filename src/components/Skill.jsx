import React from 'react';
import javascript from '../../public/images/javascript.png';
import skill from '../data/skill';
import { Link } from 'react-router-dom';

const Skill = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white">
        <div className="mt-5 mb-10 text-4xl font-bold">
          Kemampuan dan Keahlian
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-5">
          {skill.map((skill) => (
            <Link
              to={skill.link}
              className="text-center duration-300 hover:scale-105"
            >
              <img
                src={skill.image}
                alt=""
                className="size-32 md:size-36"
              />
              <span className="font-semibold">{skill.skill}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
