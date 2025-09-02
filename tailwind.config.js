/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'], 
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: "#74C69D",
          secondary: "#5aa27c",
        },
      },
    },
    plugins: [],
  };
  