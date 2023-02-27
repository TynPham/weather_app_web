/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        1.35: "1.35rem",
        2.75: "2.75rem",
      },
      colors: {
        orange_cf: "#f39c12",
        blue_cf: "#0652DD",
      },
      gridTemplateColumns: {
        "7_3": "70% 30%",
        "6fr": "repeat(6, 1fr)",
        "1fr": "repeat(1, 1fr)",
        "2fr": "repeat(2, 1fr)",
        "3fr": "repeat(3, 1fr)",
        "6_4": "60% 40%",
      },
      backgroundImage: {
        sky: "linear-gradient(to top, #2980b9, #6dd5fa,  #6dd5fa);",
        pink: "linear-gradient(to right, #f953c6, #b91d73);",
        orange: "linear-gradient(to top, #f2994a, #f2c94c);",
      },
      minHeight: {
        430: "430px",
        500: "500px",
      },
      margin: {
        "2p": "2px",
      },
      borderRadius: {
        3: "3rem",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",
    },
  },
  plugins: [],
};
