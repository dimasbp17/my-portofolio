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
        hijau: '#1fea00',
      },
    },
  },
  plugins: [],
});
