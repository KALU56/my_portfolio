/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'art-red': '#8E1616',
        'art-hover': '#D84040',
        'art-text': '#1D1616',
        'art-bg': '#EEEEEE',
      },
    },
  },
  darkMode: 'class', // or 'media' if preferred
  plugins: [],
};
