import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from 'react-icons/io5';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiVisualstudiocode,
} from 'react-icons/si';
import { FaBootstrap, FaFigma, FaGithub } from 'react-icons/fa6';
import skills from '../data/skill.js';
import { TbBrandVite } from 'react-icons/tb';

const Skill = () => {
  const iconMap = {
    IoLogoHtml5: <IoLogoHtml5 />,
    IoLogoCss3: <IoLogoCss3 />,
    IoLogoJavascript: <IoLogoJavascript />,
    IoLogoReact: <IoLogoReact />,
    SiNextdotjs: <SiNextdotjs />,
    IoLogoNodejs: <IoLogoNodejs />,
    SiMysql: <SiMysql />,
    SiTailwindcss: <SiTailwindcss />,
    FaBootstrap: <FaBootstrap />,
    FaFigma: <FaFigma />,
    FaGithub: <FaGithub />,
    SiVisualstudiocode: <SiVisualstudiocode />,
    SiAdobeillustrator: <SiAdobeillustrator />,
    SiAdobephotoshop: <SiAdobephotoshop />,
    TbBrandVite: <TbBrandVite />,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white md:px-20">
        <div className="flex flex-col items-start w-full mt-5 mb-5 text-4xl font-bold md:flex-row md:items-center text-nowrap">
          Kemampuan <span className="mx-2 text-hijau">&</span> Keahlian
          <hr className="w-full border border-white md:ml-5" />
        </div>

        <div className="my-5 text-hijau">Teknologi</div>
        <div className="grid w-full grid-cols-2 gap-2 md:gap-5 md:grid-cols-5">
          {skills.tech.map(({ skill, link, logo }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 duration-300 bg-transparent border border-white rounded-lg hover:bg-hijau hover:text-white"
            >
              <div className="text-2xl">{iconMap[logo]}</div>
              <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-medium text-center hover:underline"
              >
                {skill}
              </Link>
            </div>
          ))}
        </div>

        <div className="my-5 text-hijau">Alat</div>
        <div className="grid w-full grid-cols-2 gap-2 md:gap-5 md:grid-cols-5">
          {skills.tools.map(({ skill, link, logo }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 duration-300 bg-transparent border border-white rounded-lg hover:bg-hijau hover:text-white"
            >
              <div className="text-2xl">{iconMap[logo]}</div>
              <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-medium text-center hover:underline"
              >
                {skill}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
