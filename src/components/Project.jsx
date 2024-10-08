import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import project from '../data/project';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Kontrol visibility gambar

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Sembunyikan gambar sebelum berganti
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project[0].image.length
        );
        setIsVisible(true); // Tampilkan gambar setelah berganti
      }, 500); // Delay untuk transisi (0.5 detik)
    }, 4000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#0F0F0F] p-5 text-white md:p-20">
        <div className="relative flex items-center justify-center">
          <div
            className="font-bold text-[100px] md:text-[150px] text-nowrap -translate-x-52 "
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
              color: 'transparent',
            }}
          >
            MY PROJECT
          </div>
          <div className="absolute z-10 mt-5 mb-10 font-bold text-nowrap md:text-4xl">
            Project Saya
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {project.map((data) => (
            <div
              key={data.id}
              className="w-full p-5 bg-black border border-white rounded-xl"
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
                </div>
                <div className="flex items-center justify-end mt-2">
                  <Link
                    to={data.href}
                    target="blank"
                  >
                    <Button
                      size="md"
                      className="capitalize bg-hijau"
                    >
                      Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
