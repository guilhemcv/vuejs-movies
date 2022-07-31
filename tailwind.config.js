/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gris: '#1B1C20',
        blue: "#333333",
      },
      width: {
        300: '300px',
        150: '150px',
        double: '200%',
      },
      height: {
        900: '1200px',
        400: '400px',
      },
      paddingTop: {
        150: '150px',
      },
      scale: {
        1000: '100',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
