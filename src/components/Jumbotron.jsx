import React from 'react';

const Jumbotron = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen px-4 pt-16 md:px-20">
        <div className="grid grid-cols-12 gap-10 text-white ">
          <div className="flex flex-col col-span-6">
            <span className="text-2xl font-bold">Hello all</span>
            <div className="text-5xl font-bold">
              <span>I am </span>
              <span className="text-lavender">Dimas Bagus Prasetyo</span>
            </div>
          </div>
          <div>d</div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
