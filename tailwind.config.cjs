/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
       "xs": "576px",
        // => @media (min-width: 576px) { ... }
        "1xl": "1300",
        // => @media (min-width: 1300px) { ... }
      },
    },
    plugins: [],
  },
};
