/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        300: '300px',
        150: '150px',
        "double": "200%",
      },
      height: {
        900: '900px',
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
