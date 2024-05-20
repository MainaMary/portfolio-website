/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D96767",
        secondary: "#DE9145",
        gray: "#8C8A8A",
        lightBlue: "#F1F1F1",
        lightWhite: "#B4B4B4",
        input: "#F4F5FB",
        skyBlue: "#F9F9F9",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 769px) { ... }
    },
  },
  plugins: [],
};
