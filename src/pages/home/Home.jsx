import React from 'react';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import dummyJumbotron from '../../data/jumbotron';
import Skill from '../../components/Skill';
import About from '../../components/About';
import Project from '../../components/Project';

const Home = () => {
  return (
    <>
      <div className="bg-black font-roboto">
        <Navbar />

        <section id="home">
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
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
      </div>
    </>
  );
};

export default Home;
