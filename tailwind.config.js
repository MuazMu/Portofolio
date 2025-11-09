/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#0a0a1a',
        accent: {
          DEFAULT: '#6366f1',
          purple: '#a855f7',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #4f4f4f10 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f10 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
