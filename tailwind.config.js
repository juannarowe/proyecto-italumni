/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        'it-magenta': '#DF007F',
        'it-magenta-light': '#FEF0F9',
        'it-violet': '#873AAA',
        'it-dark': '#171A1F',
      },
      backgroundImage: {
        'it-gradient': 'linear-gradient(to right, #873AAA, #DF007F)',
      },
    },
  },
  plugins: [],
}