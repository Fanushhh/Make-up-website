/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'quick' : ['Quicksand', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'dark-grey': '#333333',
        'semi-dark-grey': 'rgba(51, 51, 51, 0.70)',
        'highlight-color': '#78CDAD',
        'light-grey': '#F9F9F9',
        'white': '#FFFFFF',
        'light-green': '#78CDAD',
        'gradient-1': '#B8EAD7',
        'gradient-2': '#C9A5A8',
      },
    },
  },
  plugins: [],
}

