/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#606C38",
        "dark-green": "#283618",
        cream: "#FEFAE0",
        tan: "#DDA15E",
        brown: "#BC6C25",
      },
    },
  },
  plugins: [],
};
