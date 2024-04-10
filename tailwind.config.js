/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      home: 'url(./public/assets/images/3418448.jpg)',
      about: 'url(./public/assets/images/rm222-mind-20.jpg)'
    },
    colors: {
      dark: '#0c1021',
      action: '#6919ff',
      primary: '#654da0',
      secondary: '#6f7a9b',
      tertiary: '#96a1c0',
      white: '#fff',
      active: '#ff2e5b',
    },
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}

