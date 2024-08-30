import { Button } from '@material-tailwind/react';
import React from 'react';

const Jumbotron = ({ skill }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen px-4 pt-16 md:px-20">
        <div className="grid grid-cols-12 gap-10 text-white ">
          <div className="flex flex-col col-span-6 gap-2">
            <span className="text-2xl font-bold">Hello all</span>
            <div className="text-5xl font-bold">
              <span>I am </span>
              <span className="text-lavender">Dimas Bagus Prasetyo</span>
            </div>
            <div>{skill}</div>
            <hr className="mt-5 border border-gray-300" />
            <div className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              labore commodi ullam, voluptatum ipsam nulla inventore
              dignissimos, qui ea expedita unde in architecto pariatur
              voluptatibus molestiae, obcaecati odit natus laborum.
            </div>

            <Button
              size="lg"
              color="blue"
            >
              Download CV
            </Button>
          </div>
          <div>d</div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
