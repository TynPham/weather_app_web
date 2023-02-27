/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    gridTemplateColumns: {
      "7_3": "70% 30%",
      "6fr": "repeat(6, 1fr)",
      "1fr": "repeat(1, 1fr)",
      "2fr": "repeat(2, 1fr)",
      "3fr": "repeat(3, 1fr)",
      "6_4": "60% 40%",
    },
    backgroundColor: {
      // info: "#2d2a54",
      // details: "#313060",
      // primary: "#3e3c71",
      transparent: "transparent",
    },
    backgroundImage: {
      sky: "linear-gradient(to top, #2980b9, #6dd5fa,  #6dd5fa);",
      pink: "linear-gradient(to right, #f953c6, #b91d73);",
      orange: "linear-gradient(to top, #f2994a, #f2c94c);",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange_cf: "#f39c12",
      blue_cf: "#0652DD",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    minHeight: {
      430: "430px",
      500: "500px",
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",
    },
  },
  plugins: [],
};
