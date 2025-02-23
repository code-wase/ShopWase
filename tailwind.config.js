/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0f172a"
      },
      container: true,
      padding:{
        DEFAULT: '1rem',
        sm:'3rem',
      }
    },
  },
  plugins: [],
}

