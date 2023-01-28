/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#775169",
        color2: "#C9A3BE",
        color3: "#E8C4E0",
      },
      fontFamily: {
        sans: ["Nunito"],
      },
    },
  },
  plugins: [],
};
