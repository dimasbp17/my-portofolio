/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto Mono, monospace',
      },
      colors: {
        lavender: '#7456FF',
        hijau: '#32CD32',
        biruMuda: '#93deff',
      },
    },
  },
  plugins: [],
});

// #1fea00
