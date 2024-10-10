/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'english': ['League Spartan', 'sans-serif'],
        'arabic': ['Cairo', 'sans-serif'], // Add Arabic font here
      },
      colors: {
        primary: '#6620ca',
        secondary: '#50f387',
        accent: '#0eb7ed',
      },
    },
  },
  plugins: [],
}