/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E31E24',
      },
      fontFamily: {
        sans: ['Prompt', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
