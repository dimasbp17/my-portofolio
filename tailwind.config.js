/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto Mono, monospace',
        inter: 'Inter, sans-serif',
        jetbrain: 'JetBrains Mono, sans-serif',
      },
      colors: {
        hitam: '#1c1c22',
        hijau: '#00e187',
        lavender: '#7456FF',
        hijau2: '#32CD32',
        biruMuda: '#93deff',
      },
    },
  },
  plugins: [],
});

// #1fea00
