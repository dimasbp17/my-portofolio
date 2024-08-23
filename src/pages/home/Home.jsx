import React from 'react';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Jumbotron />
      </div>
    </>
  );
};

export default Home;
