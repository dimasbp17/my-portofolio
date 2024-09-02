import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 text-white">
        <div className="mt-5 mb-10 text-4xl font-bold">Tentang Saya</div>
        <div className="text-lg leading-7 text-justify md:px-20">
          Halo! Saya {''}
          <strong className="text-lavender">Dimas Bagus Prasetyo</strong>,
          seorang Frontend Web Developer yang bersemangat menciptakan pengalaman
          web yang menarik dan fungsional. Saya merupakan lulusan dari
          Universitas AMIKOM Yogyakarta dan saat ini bekerja di Sofyan
          Corporation sebagai Frontend Web Developer. Saya memiliki keahlian
          dalam berbagai teknologi pengembangan web seperti HTML, CSS,
          JavaScript, React.js, Next.js, Node.js, Tailwind, dan Bootstrap.
          Selain itu, saya juga terampil menggunakan alat-alat kolaborasi
          seperti GitHub dan Figma untuk desain antarmuka pengguna. <br />
          Dengan pengalaman ini, saya selalu berusaha menggabungkan desain yang
          estetik dengan fungsionalitas yang optimal untuk menghadirkan solusi
          web yang inovatif dan responsif. Saya senang bekerja secara
          kolaboratif dalam tim, tetapi juga mampu mengelola proyek secara
          mandiri untuk mencapai tujuan dengan efisien.
        </div>
      </div>
    </>
  );
};

export default About;
