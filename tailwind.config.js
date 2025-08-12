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
        // primary: "#BF0A30", // red
        primary: '#BF0A30', // red
        secondary: '#002868', // blue
        light: '#f5f5f5', //
        dark: '#', //
        background : '#232323', 
        accent:"#CDC5A7",
        transparent: "#ffffff"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
