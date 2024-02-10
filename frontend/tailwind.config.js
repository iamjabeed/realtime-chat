/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black-color)",
        pink: "var(--pink-color)",
        orange: "var(--orange-color)",
        yellow: "var(--yellow-color)",
      },
    },
  },
  plugins: [require("daisyui")],
};
