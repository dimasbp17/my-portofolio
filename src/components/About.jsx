import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 md:px-20 text-white bg-[#0F0F0F]">
        <div>
          <div className="flex flex-col items-start mt-5 mb-10 text-4xl font-bold md:flex-row md:items-center text-nowrap">
            Tentang Saya
            <hr className="w-full border border-white md:ml-5" />
          </div>
          <div className="text-lg leading-7 text-justify ">
            Halo! Saya {''}
            <strong className="text-hijau">Dimas Bagus Prasetyo</strong>,
            seorang Frontend Web Developer yang bersemangat menciptakan
            pengalaman web yang menarik dan fungsional. Saya merupakan lulusan
            dari{' '}
            <span className="text-hijau">Universitas AMIKOM Yogyakarta</span>{' '}
            dan saat ini bekerja di Sofyan Corporation sebagai Frontend Web
            Developer. Saya memiliki keahlian dalam berbagai teknologi
            pengembangan web seperti{' '}
            <span className="text-hijau">
              HTML, CSS, JavaScript, React.js, Next.js, Node.js, Tailwind, dan
              Bootstrap
            </span>
            . Selain itu, saya juga terampil menggunakan alat-alat kolaborasi
            seperti GitHub dan Figma untuk desain antarmuka pengguna. <br />
            Dengan pengalaman ini, saya selalu berusaha menggabungkan desain
            yang estetik dengan fungsionalitas yang optimal untuk menghadirkan
            solusi web yang inovatif dan responsif. Saya senang bekerja secara
            kolaboratif dalam tim, tetapi juga mampu mengelola proyek secara
            mandiri untuk mencapai tujuan dengan efisien.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
