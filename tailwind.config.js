/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:"#5679FF",
        dark:"#101928",
      },
      fontFamily:{
        sans:["Work Sans","Poppins", "sans-serif"],
      
      }
    },
  },
  plugins: [],
}