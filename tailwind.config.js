/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit', //  Faster compiler just-in-time mode
  purge: ['./src/**/*.{js,jsx.ts.tsx}', './public/index.html'], //  Purge un-used CSS to make final bundle smaller
  theme: {
    extend: {},
  },
  plugins: [],
};
