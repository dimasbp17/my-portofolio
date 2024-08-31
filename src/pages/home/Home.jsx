import React from 'react';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import dummyJumbotron from '../../data/jumbotron';

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <div>
          {dummyJumbotron.map((data, index) => (
            <div key={index}>
              <Jumbotron
                name={data.name}
                role={data.role}
                description={data.description}
                image={data.image}
                socialLinks={data.socialLinks}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
