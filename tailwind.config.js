/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: { 10: "#133b5c", 20: "#d7d0cb" },
            },
            fontFamily: {
              style1: "Delius Swash Caps",
              style2: "Comfortaa",
              style3: "Short Stack",
          },
          backgroundImage: {
            'main': "url('./images/zubiRemovebg.png')",
          },
          boxShadow: {
            outer: "-2px -2px 24px 0px rgba(92,83,92,1)",
            inner: "inset 7px 10px 18px -1px rgba(92,87,92,1)",
        },
        },
    },
    plugins: [],
};
