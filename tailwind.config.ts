/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      sm: '521px',
      md: '768px',
      lg: '1033px',
      xl: '1215px',
      '1xl': '1377px',
      '2xl': '1536px',
    },
  },
  important: true,
  plugins: [],
};
