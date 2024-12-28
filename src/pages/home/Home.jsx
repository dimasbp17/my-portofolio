import React from 'react';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import Project from '../../components/Project';
import Skill from '../../components/Skill';
import dummyJumbotron from '../../data/jumbotron';

const Home = () => {
  return (
    <>
      <div className="text-base bg-hitam font-jetbrain">
        <section>
          <Navbar />
        </section>
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
        <section id="experience">
          <Experience />
        </section>
        <section id="project">
          <Project />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
