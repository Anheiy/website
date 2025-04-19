/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        Jersey10:['"Jersey 10"'],
        Jersey25:['"Jersey 25"']
      },
    }
  },
  plugins: [],
}

