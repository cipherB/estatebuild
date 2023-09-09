/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          one: "#4bd18e", /**green */
          two: "#163ef0", /**blue */
          three: "#8a25b1", /**purple */
          four: "#f09116", /**orange */
        }
      }
    },
  },
  plugins: [],
}

