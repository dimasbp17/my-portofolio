import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import project from '../data/project';

const Project = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project[0].image.length
        );
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const personalProjects = project.filter(
    (data) => data.category === 'personal'
  );
  const professionalProjects = project.filter(
    (data) => data.category === 'professional'
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white md:p-20">
        <div className="flex flex-col items-start w-full mb-5 text-4xl font-bold md:flex-row md:items-center text-nowrap">
          Project <span className="pl-2 text-hijau">Saya</span>
          <hr className="w-full border border-white md:ml-5" />
        </div>

        <div className="flex mt-5 mb-5 space-x-5 text-lg font-bold">
          <button
            className={`py-2 ${
              activeTab === 1
                ? 'border-b-2 border-hijau text-hijau'
                : 'text-white'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Professional Project
          </button>
          <button
            className={`py-2 ${
              activeTab === 2
                ? 'border-b-2 border-hijau text-hijau'
                : 'text-white'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Personal Project
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 1 && (
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              {professionalProjects.map((data) => (
                <div
                  key={data.id}
                  className="w-full p-5 border border-white rounded-xl bg-[#0F0F0F]"
                >
                  <div className="flex flex-col w-full ">
                    <div className="w-full ">
                      <img
                        src={data.image[currentImageIndex]}
                        alt={data.title}
                        className={`w-full h-auto transition-opacity duration-500 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <span className="mt-2 text-xl font-semibold text-hijau">
                        {data.title}
                      </span>
                      <span className="text-base text-justify text-white/90">
                        {data.description}
                      </span>
                      <span className="text-base text-justify text-blue-500">
                        {data.tech}
                      </span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <Link
                        to={data.href}
                        target="blank"
                      >
                        <Button
                          size="md"
                          className="px-10 capitalize rounded-md bg-hijau"
                        >
                          Visit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              {personalProjects.map((data) => (
                <div
                  key={data.id}
                  className="w-full p-5 bg-[#0F0F0F] border border-white rounded-xl"
                >
                  <div className="flex flex-col w-full ">
                    <div className="w-full ">
                      <img
                        src={data.image[currentImageIndex]}
                        alt={data.title}
                        className={`w-full h-auto transition-opacity duration-500 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <span className="mt-2 text-xl font-semibold text-hijau">
                        {data.title}
                      </span>
                      <span className="text-base text-justify text-white/90">
                        {data.description}
                      </span>
                      <span className="text-base text-justify text-blue-500">
                        {data.tech}
                      </span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <Link
                        to={data.href}
                        target="blank"
                      >
                        <Button
                          size="md"
                          className="px-10 capitalize rounded-md bg-hijau"
                        >
                          Visit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
