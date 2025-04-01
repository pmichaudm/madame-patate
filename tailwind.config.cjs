/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        'orange-patate' : '#D87E41',
        'vert-patate' : '#236645',
      }
    },
  },
  plugins: [],
};
