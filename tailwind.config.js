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
        primary: '#008000', // green Test
        secondary: '#002868', // blue
        light: '#f5f5f5',
        dark: '#171717',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    }
  },
  plugins: [],
};
