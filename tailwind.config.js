import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      // transparent: "transparent",
      // current: "currentColor",
      // white: "#ffffff",
      // purple: "#3f3cbb",
      // midnight: "#121063",
      // metal: "#565584",
      // tahiti: "#3ab7bf",
      // silver: "#ecebff",
      // "bubble-gum": "#ff77e9",
      // bermuda: "#78dcca",
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
