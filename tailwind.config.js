const defaultTheme = require('tailwindcss/defaultTheme');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  mode: !IS_DEVELOPMENT ? 'jit' : null,
  purge: !IS_DEVELOPMENT
    ? ['./src/app/**/*.{js,ts,jsx,tsx}', './src/app/components/**/*.{js,ts,jsx,tsx}']
    : null,
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
