/** @type {import('tailwindcss').Config} */
export default {
      darkMode: 'class', // disable dark mode entirely
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#B43140",
        secondary: "#26486A",
        light: "#f5f5f5",
        dark: "#171717",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    }
  },
  plugins: [],
};
